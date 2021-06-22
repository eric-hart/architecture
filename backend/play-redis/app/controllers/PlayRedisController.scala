package controllers

import com.redis.RedisClient
import play.api.mvc.{AbstractController, ControllerComponents}

import javax.inject.Inject

class PlayRedisController @Inject() (cc: ControllerComponents) extends AbstractController(cc) {
  val connection = new RedisClient("localhost", 6379)

  def getAll = Action {
    val response: Option[String] =  connection.get("/users")
    val api = response match {
      case Some(api) => api
      case None => ""
    }
    Ok(api)
  }

  def postAll = Action { implicit request1 =>
    val api: String = request1.body.asText match {
      case Some(api) => api
      case None => ""
    }
    val flag: Boolean = connection.set("/users", api)
    Ok(flag.toString)
  }

  def getOne(id: Long) = Action {
    val response: Option[String] =  connection.get(s"/users/$id")
    val api = response match {
      case Some(text) => text
      case None => ""
    }
    Ok(api)
  }

  def postOne(id: Long) = Action { implicit request2 =>
    val api: String = request2.body.asText match {
      case Some(text) => text
      case None => ""
    }
    val flag: Boolean = connection.set(s"/users/$id", api)
    Ok(flag.toString)
  }
}
