package com.backend.ktorHttp.routes

import io.ktor.application.*
import io.ktor.routing.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.http.*

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.features.json.*
import io.ktor.client.features.logging.*

import com.backend.ktorHttp.models.*

val client = HttpClient(CIO) {
   install(JsonFeature)
   install(Logging) {
     logger = Logger.DEFAULT
     level = LogLevel.HEADERS
   }
}

var hadSync: Boolean = false;

fun Route.springBootMybatisRestApi() {
  get("/api/users") {
    val hasView: String = client.get<String>("http://localhost:2500/view/has/users")
    if (!hasView.contains("true")) {
      client.put<String>("http://localhost:2500/view/new/users");
    }
    if (hadSync == false) {
      client.put<String>("http://localhost:2500/view/sync/users")
      hadSync = true
    }
    val cache: String = client.get<String>("http://localhost:2400/memorycache/users")
    var api: String
    if (cache == "") {
      api = client.get<String>("http://localhost:2500/view/users")
      client.post<String>("http://localhost:2400/memorycache/users") {
        body = api
      }
    } else {
      api = client.get<String>("http://localhost:2400/memorycache/users")
    }
    call.respond(api)
  }

  get("/api/users/{id}") {
    val id: String? = call.parameters["id"]
    val hasView: String = client.get<String>("http://localhost:2500/view/has/users")
    if (!hasView.contains("true")) {
      client.put<String>("http://localhost:2500/view/new/users");
    }
    if (hadSync == false) {
      client.put<String>("http://localhost:2500/view/sync/users")
      hadSync = true
    }
    val cache: String = client.get<String>("http://localhost:2400/memorycache/users/$id")
    var api: String
    if(cache == "" ) {
      api = client.get<String>("http://localhost:2500/view/users/$id")
      client.post<String>("http://localhost:2400/memorycache/users/$id") {
        body = api
      }
    } else {
      api = client.get<String>("http://localhost:2400/memorycache/users/$id")
    }
    call.respond(api)
  }

  post("/api/users") {
    val hasView: String = client.get<String>("http://localhost:2500/view/has/users")
    if (!hasView.contains("true")) {
      client.put<String>("http://localhost:2500/view/new/users");
    }
    if (hadSync == false) {
      client.put<String>("http://localhost:2500/view/sync/users")
      hadSync = true
    }
    val api: String  = client.post<String>("http://localhost:2500/view/users") {
      contentType(ContentType.Application.Json)
      body = call.receive<User>()
    }
    client.post<String>("http://localhost:2400/memorycache/users") {
      body = ""
    }
    call.respond(api)
  }

  put("/api/users") {
    val hasView: String = client.get<String>("http://localhost:2500/view/has/users")
    if (!hasView.contains("true")) {
      client.put<String>("http://localhost:2500/view/new/users");
    }
    if (hadSync == false) {
      client.put<String>("http://localhost:2500/view/sync/users")
      hadSync = true
    }
    val api: String = client.put<String>("http://localhost:2500/view/users") {
      contentType(ContentType.Application.Json)
      body = call.receive<User>()
    }
    client.post<String>("http://localhost:2400/memorycache/users") {
      body = ""
    }
    call.respond(api)
  }

  delete("/api/users/{id}") {
    val id: String? = call.parameters["id"]
    val hasView: String = client.get<String>("http://localhost:2500/view/has/users")
    if (!hasView.contains("true")) {
      client.put<String>("http://localhost:2500/view/new/users");
    }
    if (hadSync == false) {
      client.put<String>("http://localhost:2500/view/sync/users")
      hadSync = true
    }
    val api: String = client.delete<String>("http://localhost:2500/view/users/$id")
    client.post<String>("http://localhost:2400/memorycache/users") {
      body = ""
    }
    call.respond(api)
  }
}

fun Application.restApiRoute() {
  routing {
    springBootMybatisRestApi()
  }
}
