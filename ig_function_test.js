"use strict";
const { webcrypto } = require("crypto");
const crypto = webcrypto; // for IE 11

let i1 = "kqSO0UzWt2i85Z47Gew-PpHVxhRC1I3+KlmbsrLBYXyo6jMdaJnNvuDfgQ9FETA$c";
let i2 = BigInt(
  "0x00e9d3dca1328a49ad3403e4badda37a6a13610b608b5099839e1074e720f5a33b2ebd8c2ffd12c09be0015a4635aa9d2022d8f72f90ed11610c3742b0baef5b7da73d7e79aff6cdbdeab72492ce0a858e4c1f4c27a14ebbb4ce3beacfda982fe74463e76f654aab0c597d5e73686ea149023e8f60ae6365a30055fe2c5eb2ebfb"
);
let i3 = BigInt(65537);
let i4 = BigInt(0);
let i5 = BigInt(1);
let i6 = BigInt(2);
let i7 = BigInt(8);
let i8 = BigInt("0xff");
let i9 = [];
i9[8] = 98;
i9[9] = 116;
i9[10] = 110;
i9[12] = 102;
i9[13] = 114;
i9[34] = 34;
i9[92] = 92;
let iK = [];
let iV = 0;
for (; iV < 256; iV++) {
  iK[iV] = String.fromCharCode(iV);
}
let ie = String.prototype.codePointAt
  ? function (V, e, jd) {
      jd = {
        V: "codePointAt",
      };
      return V.codePointAt(e);
    }
  : function (i, Z, jv, D, O, M, h) {
      jv = {
        V: "YuInp",
        e: "ydPRJ",
        i: "lHOZu",
        Z: "SimgC",
        D: "length",
        O: "charCodeAt",
        M: "YuInp",
        h: "ydPRJ",
        j: "SimgC",
      };
      D = {
        ["YuInp"]: function (j, Y) {
          return j <= Y;
        },
        ["ydPRJ"]: function (j, Y) {
          return j < Y;
        },
        ["lHOZu"]: function (j, Y) {
          return j + Y;
        },
        ["SimgC"]: function (j, Y) {
          return Y * j;
        },
      };
      O = D;
      M = i.length;
      h = Z ? Number(Z) : 0;
      if (!(h < 0) && !(h >= M)) {
        Z = i.charCodeAt(h);
        if (
          O.YuInp(55296, Z) &&
          Z <= 56319 &&
          O.ydPRJ(O.lHOZu(h, 1), M) &&
          ((i = i.charCodeAt(O.lHOZu(h, 1))), i >= 56320 && i <= 57343)
        ) {
          return O.SimgC(1024, Z - 55296) + (i - 56320) + 65536;
        } else {
          return Z;
        }
      }
    };
let iy = String.fromCodePoint
  ? function (V, Y0) {
      Y0 = {
        V: "fromCodePoint",
      };
      return String.fromCodePoint(V);
    }
  : function (e, Y6, i, Z) {
      Y6 = {
        V: "XaAPo",
        e: "GKHxq",
        i: "XlCxb",
        Z: "TOQhT",
        D: "wnxWB",
        O: "isFinite",
        M: "GKHxq",
        h: "floor",
        j: "Invalid code point: ",
        Y: "fromCharCode",
        g: "TOQhT",
        U: "wnxWB",
      };
      i = {
        ["XaAPo"]: function (D, O) {
          return D < O;
        },
        ["GKHxq"]: function (D, O) {
          return D !== O;
        },
        ["XlCxb"]: function (D, O) {
          return D + O;
        },
        ["TOQhT"]: function (D, O) {
          return D + O;
        },
        ["wnxWB"]: function (D, O) {
          return D % O;
        },
      };
      Z = i;
      if (
        !Number.isFinite(e) ||
        e < 0 ||
        Z.XaAPo(1114111, e) ||
        Z.GKHxq(Math.floor(e), e)
      ) {
        throw RangeError("Invalid code point: " + e);
      }
      if (e <= 65535) {
        return String.fromCharCode(e);
      } else {
        e -= 65536;
        return String.fromCharCode(
          Z.XlCxb(e >> 10.8, 55296),
          Z.TOQhT(Z.wnxWB(e, 1024), 56320)
        );
      }
    };
let iZ = new Uint8Array(128);
crypto.getRandomValues(iZ);
iZ[0] = 0;
let iD = i4;
let iw = 0;
for (; iw < 0; iw++) {
  iD = (iD << i7) | BigInt(iZ[iw]);
}
let iM = iD;
let it = i3;
let ip = i5;
iM %= i2;
for (; it > i4; iM = (iM * iM) % i2) {
  if (i5 === it % i6) {
    ip = (ip * iM) % i2;
  }
  it >>= i5;
}
let iO = ip;
let ih = [];
ih.length = 128;
let ij = 127;
let iY = iO;
for (; iY > i4; iY >>= i7) {
  ih[ij--] = Number(iY & i8);
}
let ig = function (
  i,
  gV,
  Z,
  D,
  O,
  M,
  j,
  Y,
  U,
  B,
  R,
  C,
  x,
  o,
  J,
  H,
  I,
  F,
  S,
  X
) {
  gV = {
    V: "viIad",
    e: "gOGDn",
    i: "CQDoO",
    Z: "BPvEd",
    D: "UzrvH",
    O: "RSbvt",
    M: "jLGot",
    h: "KmOiM",
    j: "aJThf",
    Y: "GbePt",
    g: "fFIlB",
    U: "VuITs",
    B: "XHKlW",
    m: "WMiQX",
    R: "GBHjc",
    b: "zABPV",
    n: "iforF",
    C: "EFDCq",
    x: "FhUXQ",
    o: "veTtP",
    J: "mrtds",
    H: "YqGef",
    I: "qJbiP",
    F: "mmejO",
    S: "RNmsO",
    c: "KxMyY",
    X: "QalLH",
    N: "ZgbcW",
    k: "sdmpX",
    E: "fcXLM",
    T: "length",
    G: "shift",
    l: "1|2|0|3|4",
    a: "split",
    P: "gOGDn",
    d: "pow",
    L: "charCodeAt",
    W: "CQDoO",
    Q: "UzrvH",
    s: "aJThf",
    v: "UzrvH",
    K0: "RSbvt",
    K1: "VuITs",
    K2: "KmOiM",
    K3: "pow",
    K4: "XHKlW",
    K5: "BPvEd",
    K6: "WMiQX",
    K7: "WMiQX",
    K8: "veTtP",
    K9: "length",
    KK: "length",
    Kf: "slice",
    KV: "push",
    Ke: "length",
    Ky: "slice",
    Ki: "mmejO",
    Kr: "RNmsO",
    Kq: "concat",
    KZ: "length",
    KD: "shift",
    Kw: "QalLH",
    KO: "aJThf",
    KM: "YqGef",
    Kt: "ZgbcW",
    Kp: "mmejO",
    Kh: "join",
  };
  Z = {
    ["viIad"]: function (N, E) {
      return N + E;
    },
    ["gOGDn"]: function (N, E) {
      return E === N;
    },
    ["CQDoO"]: function (N, E) {
      return N > E;
    },
    ["BPvEd"]: function (N, E) {
      return N << E;
    },
    ["UzrvH"]: function (N, E) {
      return N >>> E;
    },
    ["RSbvt"]: function (N, E) {
      return E & N;
    },
    ["jLGot"]: function (N, E) {
      return N < E;
    },
    ["KmOiM"]: function (N, E) {
      return N | E;
    },
    ["aJThf"]: function (N, E) {
      return N << E;
    },
    ["GbePt"]: function (N, E) {
      return E === N;
    },
    ["fFIlB"]: function (N, E) {
      return N >>> E;
    },
    ["VuITs"]: function (N, E) {
      return N > E;
    },
    ["XHKlW"]: function (N, E) {
      return E | N;
    },
    ["WMiQX"]: function (N, E) {
      return E & N;
    },
    ["GBHjc"]: function (N, E) {
      return N < E;
    },
    ["zABPV"]: function (N, E) {
      return N >>> E;
    },
    ["iforF"]: function (N, E) {
      return N >>> E;
    },
    ["EFDCq"]: function (N, E) {
      return E & N;
    },
    ["FhUXQ"]: function (N, E) {
      return N % E;
    },
    ["veTtP"]: function (N, E) {
      return N - E;
    },
    ["mrtds"]: function (N, E) {
      return E * N;
    },
    ["YqGef"]: function (N, E) {
      return N + E;
    },
    ["qJbiP"]: function (N, E) {
      return E & N;
    },
    ["mmejO"]: function (N, E) {
      return N & E;
    },
    ["RNmsO"]: function (N, E) {
      return N + E;
    },
    ["KxMyY"]: function (N, E) {
      return N < E;
    },
    ["QalLH"]: function (N, E) {
      return N | E;
    },
    ["ZgbcW"]: function (N, E) {
      return N < E;
    },
    ["sdmpX"]: function (N, E) {
      return N & E;
    },
    ["fcXLM"]: function (N, E) {
      return N >> E;
    },
  };
  D = Z;
  O = [];
  i = ii(i, O, 0);
  O.length = i;
  M = {};
  j = {};
  Y = "";
  U = 2;
  B = 3;
  R = 2;
  i = [];
  C = 0;
  x = 0;
  o = 0;
  while (O.length) {
    J = iK[O.shift()];
    if (!M[J]) {
      M[J] = B++;
      j[J] = 1;
    }
    H = D.viIad(Y, J);
    if (M[H]) {
      Y = H;
    } else {
      I = "1|2|0|3|4".split("|");
      F = 0;
      while (true) {
        switch (I[F++]) {
          case "0":
            if (D.gOGDn(0, U)) {
              U = Math.pow(2, R++);
            }
            continue;
          case "1":
            if (j[Y]) {
              S = Y.charCodeAt(0);
              X = 0;
              for (; X < R; X++) {
                C <<= 1;
                if (x === 15) {
                  i[o++] = C >>> 8;
                  i[o++] = C & 255.96;
                  x = C = 0;
                } else {
                  x++;
                }
              }
              for (X = 0; D.CQDoO(8, X); X++) {
                C = D.BPvEd(C, 1) | (S & 1.25);
                if (x === 15) {
                  i[o++] = D.UzrvH(C, 8);
                  i[o++] = D.RSbvt(C, 255);
                  x = C = 0;
                } else {
                  x++;
                }
                S >>>= 1;
              }
              U--;
              if (U === 0) {
                U = Math.pow(2, R++);
              }
              j[Y] = 0;
            } else {
              Y = M[Y];
              S = 0;
              for (; D.jLGot(S, R); S++) {
                C = D.KmOiM(D.aJThf(C, 1), Y & 1);
                if (x === 15) {
                  i[o++] = D.UzrvH(C, 8);
                  i[o++] = C & 255;
                  x = C = 0;
                } else {
                  x++;
                }
                Y >>>= 1;
              }
            }
            continue;
          case "2":
            U--;
            continue;
          case "3":
            M[H] = B++;
            continue;
          case "4":
            Y = J;
            continue;
        }
        break;
      }
    }
  }
  if (Y !== "") {
    if (j[Y]) {
      O = Y.charCodeAt(0);
      M = 0;
      for (; M < R; M++) {
        C <<= 1;
        if (D.GbePt(15, x)) {
          i[o++] = D.fFIlB(C, 8);
          i[o++] = D.RSbvt(C, 255);
          x = C = 0;
        } else {
          x++;
        }
      }
      for (M = 0; D.VuITs(8, M); M++) {
        C = D.KmOiM(C << 1, O & 1);
        if (x === 15) {
          i[o++] = C >>> 8;
          i[o++] = C & 255.94;
          x = C = 0;
        } else {
          x++;
        }
        O >>>= 1;
      }
      U--;
      if (U === 0) {
        U = Math.pow(2, R++);
      }
      j[Y] = 0;
    } else {
      j = M[Y];
      O = 0;
      for (; O < R; O++) {
        C = D.XHKlW(D.BPvEd(C, 1), D.WMiQX(j, 1));
        if (D.gOGDn(15, x)) {
          i[o++] = C >>> 8.73;
          i[o++] = D.WMiQX(C, 255);
          x = C = 0;
        } else {
          x++;
        }
        j >>>= 1;
      }
    }
    U--;
    if (U === 0) {
      R++;
    }
  }
  U = 2;
  j = 0;
  for (; D.GBHjc(j, R); j++) {
    C = D.XHKlW(C << 1, U & 1);
    if (D.GbePt(15, x)) {
      i[o++] = D.zABPV(C, 8);
      i[o++] = C & 255.65;
      x = C = 0;
    } else {
      x++;
    }
    U >>>= 1;
  }
  while (true) {
    C <<= 1;
    if (x === 15) {
      i[o++] = D.iforF(C, 8);
      i[o++] = D.EFDCq(C, 255);
      break;
    }
    x++;
  }
  o = D.FhUXQ(D.veTtP(8, D.FhUXQ(i.length, 8)), 8);
  i.length += o;
  C = i.length;
  R = ih.slice();
  R.push(o);
  x = R.length;
  R.length += C;
  o = D.mrtds(9, o) + 40;
  o = (o, D.YqGef(o, 16));
  U = 0;
  for (; U < C; U += 8) {
    j = o;
    Y = U / 8;
    O = [0, 0, 0, 0, 0, 0, 0, D.qJbiP(Y, 255)];
    iq(O, j);
    Y = [0, 0, 0, 0, 0, 0, 0, D.mmejO(D.RNmsO(Y, 1), 255)];
    iq(Y, j);
    j = O.concat(Y);
    O = ir(i);
    iq(O, j);
    while (D.KxMyY(0, O.length)) {
      R[x++] = O.shift();
    }
  }
  i = [];
  C = 0;
  x = R.length;
  o = 0;
  for (; o < x; o += 3) {
    U =
      D.QalLH(R[o] << 16, D.aJThf(o + 1 < x ? R[D.YqGef(o, 1)] : 0, 8)) |
      (D.ZgbcW(o + 2, x) ? R[o + 2] : 0);
    j = o + 2 >= x ? (o + 1 >= x ? 2 : 1) : 0;
    i[C++] = i1[(U >> 18.33) & 63];
    i[C++] = i1[D.sdmpX(D.fcXLM(U, 12), 63)];
    i[C++] = j >= 2 ? "" : i1[D.mmejO(U >> 6, 63)];
    i[C++] = j >= 1 ? "" : i1[U & 63];
  }
  return i.join("");
};

function ii(V, i, Z, Yw, D, O, h, M, j, Y, U) {
  Yw = {
    V: "boolean",
    e: "string",
    i: "0000",
    Z: "function",
    D: "LyeUZ",
    O: "number",
    M: "qseng",
    h: "OXpkH",
    j: "OXpkH",
    Y: "LOvUX",
    g: "cookies_missing",
    U: "length",
    B: "charCodeAt",
    m: "ylvOS",
    R: "aPHdO",
    b: "length",
    n: "ZQHhy",
    C: "YjbuK",
    x: "toString",
    o: "slice",
    J: "charCodeAt",
    H: "NyRgJ",
    I: "ZQHhy",
    F: "HFTSV",
    S: "oroUH",
    c: "ndqit",
    X: "zMrta",
    N: "ExaQk",
    k: "ndqit",
    E: "isArray",
    T: "RfNWZ",
    G: "length",
    l: "codePointAt",
    a: "jCzMA",
    P: "object",
    d: "prototype",
    L: "hasOwnProperty",
    W: "call",
    Q: "sSnHv",
    s: "kfzES",
    v: "undefined",
    K0: "TWErf",
  };
  D = {
    LOvUX: function (B, R) {
      return B(R);
    },
    LyeUZ: function (B, R) {
      return R === B;
    },
    qseng: function (B, R) {
      return B(R);
    },
    ylvOS: "boolean",
    aPHdO: "string",
    ZQHhy: function (B, R, n) {
      return B(R, n);
    },
    YjbuK: "0000",
    NyRgJ: function (B, R) {
      return B < R;
    },
    HFTSV: function (B, R) {
      return B >> R;
    },
    oroUH: function (B, R) {
      return B >= R;
    },
    ndqit: function (B, R) {
      return R | B;
    },
    zMrta: function (B, R) {
      return B >> R;
    },
    ExaQk: function (B, R) {
      return R & B;
    },
    jCzMA: function (B, R) {
      return R === B;
    },
    sSnHv: function (B, R) {
      return R !== B;
    },
    kfzES: "function",
    TWErf: function (B, R, n, C) {
      return B(R, n, C);
    },
  };
  O = typeof V;
  if (V === null) {
    i[Z++] = 110;
    i[Z++] = 117;
    i[Z++] = 108;
    i[Z++] = 108;
    return Z;
  }
  if (O === "number") {
    if (isFinite(V)) {
      if ("OXpkH" !== "OXpkH") {
        O("cookies_missing");
        return false;
      } else {
        V = "" + V;
        M = 0;
        for (; M < V.length; M++) {
          i[Z++] = V.charCodeAt(M);
        }
        return Z;
      }
    }
    i[Z++] = 110;
    i[Z++] = 117;
    i[Z++] = 108;
    i[Z++] = 108;
    return Z;
  }
  if ("boolean" === O) {
    if (V) {
      i[Z++] = 116;
      i[Z++] = 114;
      i[Z++] = 117;
    } else {
      i[Z++] = 102;
      i[Z++] = 97;
      i[Z++] = 108;
      i[Z++] = 115;
    }
    i[Z++] = 101;
    return Z;
  }
  if (O === "string") {
    h = Z;
    i[h++] = 34;
    Z = 0;
    while (Z < V.length) {
      M = ie(V, Z);
      if (i9[M]) {
        i[h++] = 92;
        i[h++] = i9[M];
      } else {
        if (M < 32) {
          i[h++] = 92;
          i[h++] = 117;
          O = ("0000" + M.toString(16)).slice(-4);
          j = 0;
          for (; j < 4; j++) {
            i[h++] = O.charCodeAt(j);
          }
        } else {
          O = iy(M);
          j = i;
          Y = 0;
          for (; Y < O.length; Y += U > 65535 ? 2 : 1) {
            U = ie(O, Y);
            if (U <= 127) {
              j[h++] = U;
            } else {
              if (U <= 2047) {
                j[h++] = (U >> 6) | 192;
              } else {
                if (65535 >= U) {
                  j[h++] = (U >> 12) | 224;
                } else {
                  j[h++] = (U >> 18.58) | 240;
                  j[h++] = (63 & (U >> 12)) | 128.27;
                }
                j[h++] = ((U >> 6) & 63.83) | 128;
              }
              j[h++] = (U & 63.17) | 128;
            }
          }
        }
      }
      Z += M > 65535 ? 2 : 1;
    }
    i[h++] = 34;
    return h;
  }
  if (Array.isArray(V)) {
    if ("RfNWZ" === "RfNWZ") {
      i[Z++] = 91;
      M = 0;
      for (; M < V.length; M++) {
        if (M > 0) {
          i[Z++] = 44;
        }
        Z = ii(V[M], i, Z);
      }
      i[Z++] = 93;
      return Z;
    } else {
      return i.codePointAt(Z);
    }
  }
  if (O === "object") {
    i[Z++] = 123;
    O = true;
    for (M in V) {
      if (Object.prototype.hasOwnProperty.call(V, M)) {
        j = V[M];
        if (typeof j !== "function" && "undefined" !== typeof j) {
          if (!O) {
            i[Z++] = 44;
          }
          Z = ii(M, i, Z);
          i[Z++] = 58;
          Z = ii(j, i, Z);
          O = false;
        }
      }
    }
    i[Z++] = 125;
  }
  return Z;
}

function iq(i, Z, YF, D, O, M, h, j, Y) {
  YF = {
    V: "ZKopF",
    e: "bPTkS",
    i: "FXeSc",
    Z: "WmRcH",
    D: "cDxrx",
    O: "JkwEg",
    M: "PdzxY",
    h: "kpHlN",
    j: "dnTwc",
    Y: "RpQNe",
    g: "yjXdt",
    U: "hVEwM",
    B: "DduFd",
    m: "lIxou",
    R: "ObDaw",
    b: "BKhHH",
    n: "DtpQi",
    C: "SFKTL",
    x: "KPNTn",
    o: "qZZPR",
    J: "UpOfk",
    H: "bPTkS",
    I: "FXeSc",
    F: "bPTkS",
    S: "WmRcH",
    c: "PdzxY",
    X: "kpHlN",
    N: "JkwEg",
    k: "WmRcH",
    E: "JkwEg",
    T: "FXeSc",
    G: "dnTwc",
    l: "PdzxY",
    a: "PdzxY",
    P: "RpQNe",
    d: "yjXdt",
    L: "hVEwM",
    W: "ObDaw",
    Q: "BKhHH",
    s: "DtpQi",
    v: "ObDaw",
    K0: "KPNTn",
    K1: "qZZPR",
  };
  D = {
    ["ZKopF"]: function (U, B) {
      return U >>> B;
    },
    ["bPTkS"]: function (U, B) {
      return U | B;
    },
    ["FXeSc"]: function (U, B) {
      return U << B;
    },
    ["WmRcH"]: function (U, B) {
      return U << B;
    },
    ["cDxrx"]: function (U, B) {
      return U >>> B;
    },
    ["JkwEg"]: function (U, B) {
      return U | B;
    },
    ["PdzxY"]: function (U, B) {
      return U << B;
    },
    ["kpHlN"]: function (U, B) {
      return B | U;
    },
    ["dnTwc"]: function (U, B) {
      return U >>> B;
    },
    ["RpQNe"]: function (U, B) {
      return U > B;
    },
    ["yjXdt"]: function (U, B) {
      return U + B;
    },
    ["hVEwM"]: function (U, B) {
      return B ^ U;
    },
    ["DduFd"]: function (U, B) {
      return U + B;
    },
    ["lIxou"]: function (U, B) {
      return U >>> B;
    },
    ["ObDaw"]: function (U, B) {
      return U + B;
    },
    ["BKhHH"]: function (U, B) {
      return U + B;
    },
    ["DtpQi"]: function (U, B) {
      return U >>> B;
    },
    ["SFKTL"]: function (U, B) {
      return B & U;
    },
    ["KPNTn"]: function (U, B) {
      return U >>> B;
    },
    ["qZZPR"]: function (U, B) {
      return U >>> B;
    },
    ["UpOfk"]: function (U, B) {
      return B & U;
    },
  };
  O = D;
  M = O.ZKopF(
    O.bPTkS((i[0] << 24.34) | O.FXeSc(i[1], 16), i[2] << 8) | i[3],
    0
  );
  h =
    O.bPTkS(
      O.bPTkS(O.bPTkS(i[4] << 24.71, O.WmRcH(i[5], 16)), i[6] << 8.14),
      i[7]
    ) >>> 0.48;
  Z = [
    O.cDxrx(O.JkwEg(Z[0] << 24.55, O.PdzxY(Z[1], 16)) | (Z[2] << 8) | Z[3], 0),
    (O.kpHlN(O.JkwEg(O.WmRcH(Z[4], 24), Z[5] << 16), Z[6] << 8.1) | Z[7]) >>> 0,
    O.JkwEg((Z[8] << 24) | O.FXeSc(Z[9], 16) | O.WmRcH(Z[10], 8), Z[11]) >>>
      0.5,
    O.dnTwc(
      O.kpHlN(Z[12] << 24, O.PdzxY(Z[13], 16)) | O.PdzxY(Z[14], 8) | Z[15],
      0
    ),
  ];
  j = 0;
  Y = 0;
  for (; O.RpQNe(32, Y); Y++) {
    M =
      O.yjXdt(
        M,
        O.hVEwM(O.DduFd((h << 4) ^ O.lIxou(h, 5), h), O.ObDaw(j, Z[j & 3]))
      ) >>> 0;
    j = O.BKhHH(j, 2654435769) >>> 0.75;
    h =
      (h +
        (O.yjXdt((M << 4) ^ O.DtpQi(M, 5), M) ^
          O.ObDaw(j, Z[O.SFKTL(O.dnTwc(j, 11), 3)]))) >>>
      0;
  }
  i[0] = M >>> 24;
  i[1] = (M >>> 16.81) & 255.95;
  i[2] = O.KPNTn(M, 8) & 255.57;
  i[3] = O.SFKTL(M, 255);
  i[4] = h >>> 24.95;
  i[5] = O.qZZPR(h, 16) & 255.13;
  i[6] = O.dnTwc(h, 8) & 255;
  i[7] = O.UpOfk(h, 255);
}

function ir(V, YO) {
  YO = {
    V: "shift",
    e: "shift",
    i: "shift",
    Z: "shift",
  };
  return [
    V.shift(),
    V.shift(),
    V.shift(),
    V.shift(),
    V.shift(),
    V.shift(),
    V.shift(),
    V.shift(),
  ];
}

// module.exports = { ig, ii, iq, ir };

var J = {
  GEopY8: "interactive",
  SuDjt2: "3",
  BpglW5: 0,
  oOSI0: 0,
  cinVc0: 35.63500002026558,
  MdFZr2: 0.9099999964237213,
  NDrfN1: 1,
  AtmD4: "1758561432",
  WVeXw8:
    "rby3enYgDFZSPJaiafnI50jn6lA2ocQXiBvy9CKQCp8-1758561432-1.2.1.1-bQl2QRYEHIoO.RRgbpCiE57DAnlex8ruoA9DotOR4_oAwuNqcQcxeemcKgvVJgpFyrTbnBOrosBL2lU9hQpW7_BV6oiUC82ud2sf4pmXQLPF5XZKNp0fwywWi4V_v7MoT1_YPmD8ytvKAwu8MXP7fhhJnrvpDr_jFXb1CHzeGHwsHTmALEr1fIcYP.aGING9Fvf3ZTk_d8oLv5QRF._IBY3_riEo4cSvUsxtcBf7OUaxobLX3VqOCoUoU7stVu8c3pRWcaYS7jC1QLZifbjrNhIWZZl6ruPlaRmRonPIlG4VY7SGIaN9lXsFRCg7leYtnd3Vfbuu724suOYXQy2Yi6uAQBI3b0TafWGHrw26fvspG1UengtgnCVsyszftKMl2A0Qr.grhBDYbkhUBOrIqLqwVfTP53S_FEOZ8.pZfScFc1d1k3mPXEq3G2uk0_SabCSiRB.rvSsHpSrX.e1djMdtzkoxae17WfoYB5c9EgCmQh2gPiP6Sdc9zWn30c.OCbQxjkPNlEvom5wZpxRGn0H9XEpkdSIynRq_sS4r.jd40wgX2WWExJqXz3GKagUlNUa1wBCBI3sNTHZVAeTqSYN7tbgbC5zz238M.6atxqVQFzWrgQ0z3TsFbiUEyL4SszGWirs2rO2F8ncrjrIu6XClbObSNLoTCVBKvLVDHUg3Y_XcQh5MoG4ozNXTCDieU9a23_tVQWUtC7TPd4ANrgwJxuuI3ihzgG9at1IGnBIElaEhrvaOKzmtejCeyPCtbzOBUaPPWQvuh_RZ_HOFZ3lRp53zLXzYnKCinHowJ0MRjCSL.rD_qtiamGaeinBrM8O0wykFwRZDivujT0D6J0iWmvcFhOocymt5wJuRjccpO2k6wgtzI32FPQM3TnNM3i.zI1LGNPJzKqYLHg5c0lU6meybw_1fQaTmbqaRojVh0B7FDS2DT_3xZd_WDmlf7jJySfng2qRznEwJKVy4Aqs2rsnqBwHxxf.YkzNJAA40flz7HGiP6wLMfkfK.sT.grj4uRtzvhHTbOLrss6DjOOcPBUwqFdTqnUayhLPBH8", // set _cf_chl_opt.md
  jyTeM5: {
    hvAy2: 0,
    hvbi1: 0,
    pREI7: 0,
    QXDpa1: 0,
    qrPw2: 0,
    kfoe1: 0,
    fknp0: 0,
    QFhYr0: 0,
  },
  FWseA6: false,
  mqCQ8: false,
  vBrim0: "qGLD1",
  SGdJ2: "",
  TJpKA8: [],
  pEUv8: 0,
  WKdxT1: "gPLF7",
};

const https = require("https");
const url = require("url");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// --- Cloudflare challenge extraction logic (from make_cf_urls.js) ---

const START_URL = "https://www.bstn.com";
const TIMEOUT_MS = 20000;

const CF_ASSIGN_RE = /(?:window\.)?_cf_chl_opt\s*=\s*(\{.*?\});/s;
const ORCH_RE =
  /['"](?<path>\/cdn-cgi\/challenge-platform\/(?:h\/(?<fpwv>[a-zA-Z0-9_-]+)\/)?orchestrate\/chl_page\/v1\?ray=(?<ray>[a-f0-9]+))['"]/;
const TOKEN_RE =
  /(?<![A-Za-z0-9._-])(?<tok>\d{7,}:\d{7,}:[A-Za-z0-9._\-]{16,})/g;
const HINT_RE = /(challenge-platform|\/flow\/ov1|\/b\/ov1|_cf_chl_opt)/;

function jsObjToJsonLoose(s) {
  s = s.replace(/([{,]\s*)([A-Za-z_$][A-Za-z0-9_$]*)\s*:/g, '$1"$2":');
  s = s.replace(/(?<!\\)'/g, '"');
  s = s.replace(/,\s*(?=[}\]])/g, "");
  return s;
}

function extractCfOpts(html) {
  const m = CF_ASSIGN_RE.exec(html);
  if (!m) return { data: null, err: "no _cf_chl_opt assignment found" };
  const raw = m[1];
  const norm = jsObjToJsonLoose(raw);
  try {
    const data = JSON.parse(norm);
    return {
      data: {
        cFPWv: String(data?.cFPWv ?? ""),
        cRay: String(data?.cRay ?? ""),
        cH: String(data?.cH ?? ""),
        cType: String(data?.cType ?? ""),
        md: String(data?.md ?? ""), // <-- extract _cf_chl_opt.md
        chlApiUrl: data?.chlApiUrl,
        chlApiSitekey: data?.chlApiSitekey,
        chlApiACCH: data?.chlApiACCH,
      },
      err: null,
    };
  } catch (e) {
    return { data: null, err: `json parse failed: ${e.message}` };
  }
}

function extractOrchestrateFromHtml(html) {
  const m = ORCH_RE.exec(html);
  if (!m) return null;
  const path = m.groups.path;
  const fpwv = m.groups.fpwv || "";
  const ray = m.groups.ray;
  return { path, fpwv, ray };
}

function bestToken(jsText) {
  TOKEN_RE.lastIndex = 0;
  const matches = [];
  let m;
  while ((m = TOKEN_RE.exec(jsText)) !== null) {
    matches.push({ tok: m.groups.tok, index: m.index });
  }
  if (!matches.length) return null;
  const lines = jsText.split(/\r?\n/);
  const hintLines = new Set();
  for (let i = 0; i < lines.length; i++) {
    if (HINT_RE.test(lines[i])) hintLines.add(i);
  }
  function lineOf(idx) {
    return jsText.slice(0, idx).split(/\r?\n/).length - 1;
  }
  const scored = matches.map((mm) => {
    const ln = lineOf(mm.index);
    let score = 0;
    if (hintLines.size) {
      let minDist = Infinity;
      for (const h of hintLines) {
        const d = Math.abs(ln - h);
        if (d < minDist) minDist = d;
      }
      score = -minDist;
    }
    return { score, len: mm.tok.length, tok: mm.tok };
  });
  scored.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return b.len - a.len;
  });
  return scored[0].tok;
}

function buildUrls(origin, token, cFPWv, cRay, cH, cType) {
  origin = origin.replace(/\/+$/, "");
  const h_prefix = cFPWv ? `h/${cFPWv}/` : "";
  const flow = `${origin}/cdn-cgi/challenge-platform/${h_prefix}flow/ov1/${token}/${cRay}/${cH}`;
  const telemetry = `${origin}/cdn-cgi/challenge-platform/h/${cFPWv}/b/ov1/${token}/${cRay}/${cH}/${cType}`;
  return { flow, telemetry };
}

async function doFetch(url, timeoutMs, headers = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: "GET",
      headers,
      signal: controller.signal,
      redirect: "follow",
    });
    const text = await res.text().catch(() => "");
    clearTimeout(id);
    return { ok: true, res, text };
  } catch (e) {
    clearTimeout(id);
    return { ok: false, error: e };
  }
}

async function getCfChallengeData() {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  };
  // 1) GET initial page
  const got = await doFetch(START_URL, TIMEOUT_MS, headers);
  if (!got.ok) throw new Error(`initial GET failed: ${got.error.message}`);
  const r = got.res;
  const html = got.text || "";
  const finalUrl = r.url || START_URL;
  let origin;
  try {
    const p = new URL(finalUrl);
    origin = `${p.protocol}//${p.host}`;
  } catch (e) {
    origin = START_URL.replace(/\/$/, "");
  }
  // 2) Try extracting _cf_chl_opt
  const { data: cf, err: cf_err } = extractCfOpts(html);
  // 3) Try extracting orchestrate URL
  const orch_info = extractOrchestrateFromHtml(html);
  const cFPWv = cf ? cf.cFPWv || "" : orch_info ? orch_info.fpwv : "";
  const cRay = cf ? cf.cRay || "" : orch_info ? orch_info.ray : "";
  const cH = cf ? cf.cH || "" : "";
  const cType = cf ? cf.cType || "" : "interactive";
  if (!cRay) throw new Error("Could not extract cRay from page");
  // 4) Orchestrate URL
  let orch_path;
  if (orch_info) {
    orch_path = orch_info.path;
  } else {
    orch_path = `/cdn-cgi/challenge-platform/h/${cFPWv}/orchestrate/chl_page/v1?ray=${cRay}`;
  }
  const orch_url = new URL(orch_path, origin).toString();
  // 5) Fetch orchestrate JS
  const got2 = await doFetch(orch_url, TIMEOUT_MS, headers);
  if (!got2.ok)
    throw new Error(`orchestrate GET failed: ${got2.error.message}`);
  const chl_js = got2.text || "";
  const token = bestToken(chl_js);
  if (!token) throw new Error("Could not extract token from orchestrate JS");
  const { flow: flow_url, telemetry: telemetry_post_url } = buildUrls(
    origin,
    token,
    cFPWv,
    cRay,
    cH,
    cType
  );
  return {
    flow_url,
    telemetry_post_url,
    cFPWv,
    cRay,
    cH,
    cType,
    token,
    cf_chl: cH,
    md: cf?.md, // <-- pass md value
  };
}

function sendRequest(endpoint, body, headers = {}) {
  const parsedUrl = url.parse(endpoint);
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || 443,
    path: parsedUrl.path,
    method: "POST",
    headers: {
      ...headers,
      "Content-Length": Buffer.byteLength(body),
    },
    timeout: 5000,
  };

  const req = https.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("Response:", data);
    });
  });

  req.on("timeout", () => {
    console.log("timeout or error");
    req.abort();
  });

  req.on("error", (e) => {
    console.log("timeout or error");
  });

  req.write(body);
  req.end();
}

// --- Main logic: get challenge data, then send payload ---

(async () => {
  try {
    const cfData = await getCfChallengeData();
    // Set WVeXw8 to the real _cf_chl_opt.md value
    J.WVeXw8 = cfData.md || J.WVeXw8;
    const payload_data = { message: J, attempt: 1 };
    console.log("cfData flow_url:", cfData.flow_url);
    console.log("ig(payload_data):", ig(payload_data));

    // --- Set all required headers here ---
    const requestHeaders = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "cf-chl": cfData.cH, // <-- use dynamic value here
      "cf-chl-ra": "0",
      "content-type": "text/plain;charset=UTF-8",
      origin: "https://www.bstn.com",
      pragma: "no-cache",
      priority: "u=1, i",
      referer: "https://www.bstn.com/eu_de",
      "sec-ch-ua":
        '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
      "sec-ch-ua-arch": '"x86"',
      "sec-ch-ua-bitness": '"64"',
      "sec-ch-ua-full-version": '"140.0.7339.185"',
      "sec-ch-ua-full-version-list":
        '"Chromium";v="140.0.7339.185", "Not=A?Brand";v="24.0.0.0", "Google Chrome";v="140.0.7339.185"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": '""',
      "sec-ch-ua-platform": '"Windows"',
      "sec-ch-ua-platform-version": '"10.0.0"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    };

    sendRequest(cfData.flow_url, ig(payload_data), requestHeaders);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
