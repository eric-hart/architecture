package controllers

import play.api.Logger
import play.api.mvc.{AbstractController, ControllerComponents}
import play.api.libs.json._
import play.api.Configuration
import requests.{Response}

import javax.inject.Inject

class RestApiDistributionNodeController @Inject() (config: Configuration, cc: ControllerComponents) extends AbstractController(cc) {
  val logger = Logger(this.getClass)

  def query = Action { implicit request1 =>
    val message: JsValue = request1.body.asJson.get
    val nodeWithTimestamp: JsValue = Json.obj(
      "host" -> "localhost",
      "port" -> "2301",
      "timestamp" -> message("timestamp"),
    )
    val response: Response = requests
      .post(
        "http://192.168.1.5:2300/distribution/cluster/reply",
        headers = Map("content-type" -> "application/json"),
        data = Json.stringify(nodeWithTimestamp))
    Ok("")
  }

  def execute = Action { implicit request2 =>
    val message: JsValue = request2.body.asJson.get
    val request: JsValue = Json.parse(message("request").toString)
    val path: String = (request \ "path").as[String]
    val method = (request \ "method").as[String]
    val body = Json.stringify(request("body"))
    method match {
      case "GET" => {
        val response: Response = requests
          .get(s"http://localhost:2000$path")
        val api: JsValue = Json.parse(response.text)
        requests
          .post(
            "http://192.168.1.5:2300/distribution/cluster/result",
            headers = Map("content-type" -> "application/json"),
            data = Json.stringify(api))
      }
      case "POST" => {
        val response: Response = requests
          .post(
            s"http://localhost:2000$path",
            headers = Map("content-Type" -> "application/json"),
            data = body)
        val api: JsValue = Json.parse(response.text)
        val outputAction = Json.obj(
          "type" -> "result",
          "content" -> api,
        )
        requests
          .post(
            s"http://192.168.1.5:2300/distribution/cluster",
            headers = Map("content-type" -> "application/json"),
            data = Json.stringify(outputAction))
      }
      case "PUT" => {
        val response: Response = requests
          .put(
            s"http://localhost:2000$path",
            headers = Map("content-type" -> "application/json"),
            data = body)
        val api: JsValue = Json.parse(response.text)
        val outputAction = Json.obj(
          "type" -> "result",
          "content" -> api,
        )
        requests
          .post(
            s"http://192.168.1.5:2300/distribution/cluster",
            headers = Map("content-type" -> "application/json"),
            data = Json.stringify(outputAction))
      }
      case "DELETE" => {
        val response: Response = requests
          .delete(
            s"http://localhost:2000$path",
            data = body)
        val api: JsValue = Json.parse(response.text)
        val outputaction = Json.obj(
          "type" -> "result",
          "content" -> api,
        )
        requests
          .post(
            s"http://192.168.1.5:2300/distribution/cluster",
            headers = Map("content-type" -> "application/json"),
            data = Json.stringify(outputaction))
      }
    }
    Ok("")
  }
}
