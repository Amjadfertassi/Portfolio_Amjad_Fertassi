google.maps.__gjsload__("search_impl", function (_) {
  var fkb = function (a, b) {
      _.H(a.Ig, 3, b);
    },
    jkb = function (a, b, c) {
      const d = _.zL(new gkb());
      c.Gq = (0, _.Ea)(d.load, d);
      c.clickable = 0 != a.get("clickable");
      _.wNa(c, _.PR(b));
      const e = [];
      e.push(_.Ak(c, "click", (0, _.Ea)(hkb, null, a)));
      _.Qb(["mouseover", "mouseout", "mousemove"], function (f) {
        e.push(_.Ak(c, f, (0, _.Ea)(ikb, null, a, f)));
      });
      e.push(
        _.Ak(a, "clickable_changed", function () {
          a.Fg.clickable = 0 != a.get("clickable");
        })
      );
      a.Gg = e;
    },
    hkb = function (a, b, c, d, e) {
      let f = null;
      if (e && ((f = { status: e.getStatus() }), 0 == e.getStatus())) {
        f.location = _.Z(e.Ig, 2)
          ? new _.Oj(
              _.Pu(_.J(e.Ig, 2, _.Vu).Ig, 1),
              _.Pu(_.J(e.Ig, 2, _.Vu).Ig, 2)
            )
          : null;
        f.fields = {};
        const g = _.yi(e.Ig, 3);
        for (let h = 0; h < g; ++h) {
          const l = _.ws(e.Ig, 3, _.ZR, h);
          f.fields[l.getKey()] = l.getValue();
        }
      }
      _.Ok(a, "click", b, c, d, f);
    },
    ikb = function (a, b, c, d, e, f, g) {
      let h = null;
      f && (h = { title: f[1].title, snippet: f[1].snippet });
      _.Ok(a, b, c, d, e, h, g);
    },
    kkb = function () {},
    lkb = class extends _.R {
      constructor() {
        super();
      }
      Yi() {
        return _.Wi(this.Ig, 2);
      }
    },
    mkb = [_.K, , , _.zq, _.EOa];
  var nkb = class extends _.R {
    constructor(a) {
      super(a);
    }
    getStatus() {
      return _.I(this.Ig, 1, -1);
    }
  };
  var gkb = class {
    constructor() {
      var a = _.jp,
        b = _.gp;
      this.Gg = _.Yi;
      this.Fg = _.qs(
        _.fA,
        a,
        _.AB + "/maps/api/js/LayersService.GetFeature",
        b
      );
    }
    load(a, b) {
      function c(g) {
        g = new nkb(g);
        b(g);
      }
      var d = new lkb();
      _.H(d.Ig, 1, a.layerId.split("|")[0]);
      _.H(d.Ig, 2, a.featureId);
      fkb(d, this.Gg.Fg().Fg());
      for (var e in a.parameters) {
        var f = _.Si(d.Ig, 4, _.ZR);
        _.H(f.Ig, 1, e);
        _.H(f.Ig, 2, a.parameters[e]);
      }
      a = _.Ki(d.vi(), mkb, 1);
      this.Fg(a, c, c);
      return a;
    }
    cancel() {
      throw Error("Not implemented");
    }
  };
  kkb.prototype.cE = function (a) {
    if (_.Gn[15]) {
      var b = a.Jg;
      const c = (a.Jg = a.getMap());
      b &&
        a.Fg &&
        (a.Hg
          ? ((b = b.__gm.Uj), b.set(b.get().un(a.Fg)))
          : a.Fg && _.TNa(a.Fg, b) && (_.Qb(a.Gg || [], _.Ck), (a.Gg = null)));
      if (c) {
        b = new _.Xy();
        const d = a.get("layerId").split("|");
        b.layerId = d[0];
        for (let e = 1; e < d.length; ++e) {
          const [f, ...g] = d[e].split(":");
          b.parameters[f] = g.join(":");
        }
        a.get("spotlightDescription") &&
          (b.spotlightDescription = new _.vz(a.get("spotlightDescription")));
        a.get("paintExperimentIds") &&
          (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
        a.get("styler") && (b.styler = new _.kz(a.get("styler")));
        a.get("roadmapStyler") &&
          (b.roadmapStyler = new _.kz(a.get("roadmapStyler")));
        a.get("travelMapRequest") &&
          (b.travelMapRequest = new _.ria(a.get("travelMapRequest")));
        a.get("mapsApiLayer") &&
          (b.mapsApiLayer = new _.cz(a.get("mapsApiLayer")));
        a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
        a.get("clickableCities") &&
          (b.clickableCities = a.get("clickableCities"));
        a.get("searchPipeMetadata") &&
          (b.searchPipeMetadata = new _.jB(a.get("searchPipeMetadata")));
        a.get("gmmContextPipeMetadata") &&
          (b.gmmContextPipeMetadata = new _.Gga(
            a.get("gmmContextPipeMetadata")
          ));
        a.get("overlayLayer") &&
          (b.overlayLayer = new _.wz(a.get("overlayLayer")));
        a.get("caseExperimentIds") &&
          (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
        a.get("boostMapExperimentIds") &&
          (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
        a.get("airQualityPipeMetadata") &&
          (b.airQualityPipeMetadata = new _.Wha(
            a.get("airQualityPipeMetadata")
          ));
        a.get("directionsPipeParameters") &&
          (b.directionsPipeParameters = new _.Uha(
            a.get("directionsPipeParameters")
          ));
        a.get("clientSignalPipeMetadata") &&
          (b.clientSignalPipeMetadata = new _.nga(
            a.get("clientSignalPipeMetadata")
          ));
        b.darkLaunch = !!a.get("darkLaunch");
        a.Fg = b;
        a.Hg = a.get("renderOnBaseMap");
        a.Hg ? ((a = c.__gm.Uj), a.set(a.get().Cl(b))) : jkb(a, c, b);
        _.Il(c, "Lg");
        _.Gl(c, 148282);
      }
    }
  };
  _.sk("search_impl", new kkb());
});
