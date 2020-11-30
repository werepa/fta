import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { CountdownComponent } from "ngx-countdown";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("cd") countdown: CountdownComponent;

  title = "FTA-Timer";
  tipo = "PADRAO";
  mostrar_welcome = false;
  mostrar_panel = 0;
  horas;
  minutos;
  seguntos;
  tempo = { hora: 0, min: 0, seg: 0 };
  config = { leftTime: 0 };

  constructor() {
    this.horas = Array(24)
      .fill(1)
      .map((x, i) => i); // [0,1,2,3,4]

    this.minutos = Array(60)
      .fill(1)
      .map((x, i) => i); // [0,1,2,3,4]

    this.seguntos = Array(60)
      .fill(1)
      .map((x, i) => i); // [0,1,2,3,4]
  }

  ngAfterViewInit() {
    this.countdown.begin();
  }

  handleEvent(event) {
    if (event.action === "done") {
      console.log("Evento => ", event);
    }
  }

  formulario() {
    this.mostrar_welcome = false;
    this.mostrar_panel = 0;
  }

  welcome() {
    this.mostrar_welcome = true;
    this.mostrar_panel = 0;
  }

  temporizador() {
    this.mostrar_welcome = false;
    this.mostrar_panel = 1;
    this.countdown.config.leftTime =
      this.tempo.hora * 3600 + this.tempo.min * 60 + this.tempo.seg;
    this.countdown.restart();
  }
}
