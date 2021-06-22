package com.backend.ktorUserAgent.routes

import io.ktor.application.*
import io.ktor.routing.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.http.*

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.client.features.logging.*
import io.ktor.client.features.json.*

import com.backend.ktorUserAgent.models.*

val client = HttpClient(CIO) {
  install(JsonFeature)
  install(Logging) {
   logger = Logger.DEFAULT
   level = LogLevel.HEADERS
  }
}

fun Route.htmlUserAgentDeliver() {
  get("/") {
    val userAgent: String = call.request.headers["User-Agent"].toString();

    if (userAgent is String) {
      when {
        userAgent.contains("Android") -> {
          val html: String = client.get<String>("http://localhost:10100/")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("iPhone") -> {
          val html: String = client.get<String>("http://localhost:10100/")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("iPad") -> {
          val html: String = client.get<String>("http://localhost:10100/")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Windows Phone") -> {
          val html: String = client.get<String>("http://localhost:10100/")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Macintosh") -> {
          val html: String = client.get<String>("http://localhost:10000/")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Linux") -> {
          val html: String = client.get<String>("http://localhost:10000/")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Windows") -> {
          val html: String = client.get<String>("http://localhost:10000/")
          call.respondText(html, ContentType.Text.Html)
        }
        else -> {
          val html: String = client.get<String>("http://localhost:10000/")
          call.respondText(html, ContentType.Text.Html)
        }
      }
    }
  }

  get("/{path...}") {
    val userAgent: String = call.request.headers["User-Agent"].toString()
    val pathParameter: List<String>? = call.parameters.getAll("path")

    var path: String
    if (pathParameter is List) {
      path = pathParameter.joinToString("/")
    } else {
      path = ""
    }

    if (userAgent is String) {
      when {
        userAgent.contains("Android") -> {
          val html: String = client.get<String>("http://localhost:10100/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("iPhone") -> {
          val html: String = client.get<String>("http://localhost:10100/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("iPad") -> {
          val html: String = client.get<String>("http://localhost:10100/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Windows Phone") -> {
          val html: String = client.get<String>("http://localhost:10100/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Macintosh") -> {
          val html: String = client.get<String>("http://localhost:10000/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Linux") -> {
          val html: String = client.get<String>("http://localhost:10000/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        userAgent.contains("Windows") -> {
          val html: String = client.get<String>("http://localhost:10000/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
        else -> {
          val html: String = client.get<String>("http://localhost:10000/${path}")
          call.respondText(html, ContentType.Text.Html)
        }
      }
    }
  }

  get("/api/users") {
    val api: String = client.get<String>("http://localhost:2101/api/users")
    call.respond(api)
  }

  get("/api/users/{id}") {
    val id: String? = call.parameters["id"]
    val api: String = client.get<String>("http://localhost:2101/api/users/$id")
    call.respond(api)
  }

  post("/api/users") {
    val api: String = client.post<String>("http://localhost:2101/api/users") {
      contentType(ContentType.Application.Json)
      body = call.receive<User>()
    }
    call.respond(api)
  }

  put("/api/users") {
    val api: String = client.put<String>("http://localhost:2101/api/users") {
      contentType(ContentType.Application.Json)
      body = call.receive<User>()
    }
    call.respond(api)
  }

  delete("/api/users/{id}") {
    val id: String? = call.parameters["id"]
    val api: String = client.delete<String>("http://localhost:2101/api/users/$id")
    call.respond(api)
  }
}

fun Application.userAgentDeliver() {
  routing {
    htmlUserAgentDeliver()
  }
}
