name := """play-redis"""
organization := "com.backend"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.6"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
libraryDependencies += "net.debasishg" %% "redisclient" % "3.30"
libraryDependencies += "com.lihaoyi" %% "requests" % "0.6.5"
