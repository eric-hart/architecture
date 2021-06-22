plugins {
  id("org.jetbrains.kotlin.jvm") version "1.3.41"
  application
}

repositories {
  jcenter()
}

dependencies {
  implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
  implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
  implementation("io.ktor:ktor-server-core:1.5.3")
  implementation("io.ktor:ktor-server-netty:1.5.3")
  implementation("ch.qos.logback:logback-classic:1.3.0-alpha5")
  implementation("io.ktor:ktor-gson:1.5.4")
  implementation("io.ktor:ktor-serialization:1.5.4")
  implementation("io.ktor:ktor-client-core:1.5.4")
  implementation("io.ktor:ktor-client-cio:1.5.4")
  implementation("io.ktor:ktor-client-gson:1.5.4")
  implementation("io.ktor:ktor-client-serialization:1.5.4")
  implementation("ch.qos.logback:logback-classic:1.3.0-alpha5n")
  implementation("io.ktor:ktor-client-logging:1.5.4")
  implementation("com.google.code.gson:gson:2.8.7")

  testImplementation("io.ktor:ktor-server-tests:1.5.3")
  testImplementation("org.jetbrains.kotlin:kotlin-test")
  testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
}

application {
  mainClassName = "io.ktor.server.netty.EngineMain"
}
