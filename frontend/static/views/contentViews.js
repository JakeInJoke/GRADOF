import AbstractView from "./AbstractView.js";

const V_001 = "/views/resumen.html";
const V_002 = "/views/insumos.html";
const V_003 = "/views/reportes.html";
const V_004 = "/views/historial.html";
const V_005 = "/views/usuarios.html";
const V_006 = "/views/nosotros.html";
const V_007 = "/views/config.html";

class resumen extends AbstractView {
  constructor() {
    super();
    this.setTitle("Resumen");
  }
  async getHtml() {
    return V_001;
  }
}
class insumos extends AbstractView {
  constructor() {
    super();
    this.setTitle("Insumos");
  }
  async getHtml() {
    return V_002;
  }
}

class reportes extends AbstractView {
  constructor() {
    super();
    this.setTitle("Reportes");
  }
  async getHtml() {
    return V_003;
  }
}

class historial extends AbstractView {
  constructor() {
    super();
    this.setTitle("Historial");
  }
  async getHtml() {
    return V_004;
  }
}

class usuarios extends AbstractView {
  constructor() {
    super();
    this.setTitle("Usuarios");
  }
  async getHtml() {
    return V_005;
  }
}
class nosotros extends AbstractView {
  constructor() {
    super();
    this.setTitle("Nosotros");
  }
  async getHtml() {
    return V_006;
  }
}
class configuracion extends AbstractView {
  constructor() {
    super();
    this.setTitle("Configuracion");
  }
  async getHtml() {
    return V_007;
  }
}

export {
  resumen,
  insumos,
  reportes,
  historial,
  usuarios,
  nosotros,
  configuracion,
};
