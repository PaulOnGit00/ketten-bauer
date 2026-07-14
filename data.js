window.MAKRO_DATA = {
 "schema_version": "0.6",
 "stand": "2026-07-04",
 "status": "entwurf",
 "scope": "Kurzfrist-GE-Familie + Geldmarkt (Herzstuck). Wachstum/Arbeitsmarkt/Exkurse spaeter.",
 "hinweis": "Kanonische Daten-Schicht. basis = typisierte Relationen {typ: besteht-aus | abgeleitet-durch-P, ids, notiz?}, many-to-many. erweitert_zu = auto-generierte flache Inverse (Vorwaerts-Index, kein Drift). Beleg-Schicht = ../Extraktion/*.md.",
 "modelle": [
  {
   "id": "supermodell",
   "typ": "wurzel",
   "label": "Supermodell (Mutter aller Modelle)",
   "basis": [],
   "annahmen": [
    "flexibles P (alpha endlich)",
    "offene VW",
    "vollkommene Kapitalmobilitaet"
   ],
   "achsen": null,
   "beschreibung": "7-Gleichungs-GE-Modell. Sub-Modelle = Spezialfaelle via Schalter. Nicht direkt eine Ansicht, sondern Wurzel der Landkarte."
  },
  {
   "id": "keynes_kreuz",
   "typ": "baustein",
   "label": "Keynesianisches Kreuz",
   "basis": [],
   "erweitert_zu": [
    "is_kurve"
   ],
   "annahmen": [
    "P fix",
    "r exogen (nur Guetermarkt)",
    "geschlossene VW",
    "I, T konstant"
   ],
   "achsen": {
    "x": "output",
    "y": "geplante_ausgaben"
   },
   "beschreibung": "Guetermarkt-Gleichgewicht Y=E. Multiplikator 1/(1-MPC). KEINE Rueckkopplung ueber r (Loop offen)."
  },
  {
   "id": "investitionsfunktion",
   "typ": "baustein",
   "label": "Investitionsfunktion I(r)",
   "basis": [],
   "erweitert_zu": [
    "is_kurve"
   ],
   "annahmen": [
    "I haengt negativ vom Realzins ab"
   ],
   "achsen": {
    "x": "investition",
    "y": "realzins"
   },
   "beschreibung": "Der r->I-Kanal. Macht aus dem Keynes-Kreuz (r fix) eine zinsabhaengige Guetermarktbeziehung -> erst dadurch entsteht die IS-Kurve."
  },
  {
   "id": "liquiditaetspraeferenz",
   "typ": "baustein",
   "label": "Liquiditaetspraeferenztheorie (Geldmarkt, kurze Frist)",
   "basis": [],
   "erweitert_zu": [
    "lm_kurve"
   ],
   "annahmen": [
    "P fix",
    "Y im Teilschritt gegeben",
    "M exogen"
   ],
   "achsen": {
    "x": "reales_geldangebot",
    "y": "realzins"
   },
   "beschreibung": "Geldmarkt: r bringt Geldangebot und -nachfrage ins Gleichgewicht. Basis der LM-Kurve."
  },
  {
   "id": "geldmarkt_quantitaet",
   "typ": "baustein",
   "label": "Quantitaetstheorie / Geldmarktgleichgewicht (lange Frist)",
   "basis": [],
   "annahmen": [
    "V konstant",
    "Y exogen (Produktionsfaktoren)",
    "Preise flexibel"
   ],
   "achsen": null,
   "beschreibung": "MV=PY. Bestimmt P und nominale Variablen (klassische Dichotomie). Geld neutral."
  },
  {
   "id": "is_kurve",
   "typ": "kurve",
   "label": "IS-Kurve (Guetermarkt)",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "keynes_kreuz",
      "investitionsfunktion"
     ]
    }
   ],
   "erweitert_zu": [
    "is_lm"
   ],
   "annahmen": [
    "P fix",
    "geschlossene VW",
    "G, T konstant"
   ],
   "achsen": {
    "x": "output",
    "y": "realzins"
   },
   "beschreibung": "Guetermarkt-GG im (Y,r)-Raum. Herleitung: r runter -> I hoch -> E hoch -> Y hoch => negative Steigung."
  },
  {
   "id": "lm_kurve",
   "typ": "kurve",
   "label": "LM-Kurve (Geldmarkt)",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "liquiditaetspraeferenz"
     ]
    }
   ],
   "erweitert_zu": [
    "is_lm"
   ],
   "annahmen": [
    "P fix",
    "M/P exogen"
   ],
   "achsen": {
    "x": "output",
    "y": "realzins"
   },
   "beschreibung": "Geldmarkt-GG im (Y,r)-Raum. Herleitung: Y hoch -> Geldnachfrage hoch -> r hoch => positive Steigung."
  },
  {
   "id": "as_kurve",
   "typ": "kurve",
   "label": "AS-Kurve (kurzfristiges Angebot)",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "preisstarrheiten",
      "lohnstarrheiten",
      "unvollk_information"
     ],
     "notiz": "alternative Mikrofundierungen der kurzfristigen AS-Steigung"
    }
   ],
   "annahmen": [],
   "achsen": {
    "x": "Y",
    "y": "P"
   },
   "beschreibung": "Kurzfristige Angebotskurve; Steigung aus Preis-/Lohnstarrheit bzw. unvollk. Information.",
   "erweitert_zu": [
    "ad_as",
    "phillips_kurve"
   ]
  },
  {
   "id": "is_lm",
   "typ": "modell",
   "label": "IS-LM-Modell",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "is_kurve",
      "lm_kurve"
     ]
    }
   ],
   "erweitert_zu": [
    "ad_as",
    "mundell_fleming"
   ],
   "annahmen": [
    "P fix (kurze Frist)",
    "geschlossene VW",
    "M exogen"
   ],
   "achsen": {
    "x": "output",
    "y": "realzins"
   },
   "beschreibung": "IS und LM gemeinsam: Y und r simultan im Schnittpunkt. Crowding-out = LM-Rueckkopplung (daempfend)."
  },
  {
   "id": "ad_as",
   "typ": "modell",
   "label": "AD-AS-Modell",
   "basis": [
    {
     "typ": "abgeleitet-durch-P",
     "ids": [
      "is_lm",
      "mundell_fleming"
     ],
     "notiz": "AD = P variieren -> Gleichgewichts-Y ablesen. is_lm=geschlossene VW, mundell_fleming=offene VW."
    },
    {
     "typ": "besteht-aus",
     "ids": [
      "as_kurve"
     ],
     "notiz": "AS-Seite des Modells (AD-Seite = abgeleitet-durch-P aus is_lm/MF)"
    }
   ],
   "annahmen": [
    "P flexibel (das ist der Unterschied zu IS-LM)",
    "geschlossene VW (Basis)"
   ],
   "achsen": {
    "x": "output",
    "y": "preisniveau"
   },
   "beschreibung": "AD aus IS-LM (P hoch -> M/P runter -> r hoch -> Y runter). SRAS: Y = Y_quer + alpha*(P - P_e). LRAS senkrecht bei Y_quer."
  },
  {
   "id": "mundell_fleming",
   "typ": "modell",
   "label": "Mundell-Fleming-Modell (IS*-LM*)",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "is_lm"
     ],
     "notiz": "kleine offene VW: IS* aus Keynes-Kreuz + Nettoexportkurve, LM*, vollk. Kapitalmobilitaet"
    },
    {
     "typ": "besteht-aus",
     "ids": [
      "offene_vw_finanzmarkt"
     ],
     "notiz": "liefert nur den Nettoexport-/Devisenmarkt-Baustein NX(e) fuer IS*. ACHTUNG: offene_vw_finanzmarkt ist lange Frist (kein Geldmarkt), MF ist kurze Frist - geteilt wird nur die Handels-/Wechselkurs-Logik, nicht das ganze Modell."
    }
   ],
   "annahmen": [
    "P starr (kurze Frist, e=epsilon)",
    "kleine offene VW",
    "vollkommene Kapitalmobilitaet -> r = r*",
    "Schalter: feste vs. flexible Wechselkurse"
   ],
   "achsen": {
    "x": "output",
    "y": "nominaler_wechselkurs"
   },
   "beschreibung": "IS*-LM*. LM* VERTIKAL (r=r* gegeben -> nur ein Y). Anpassungsvariable = Wechselkurs statt Zins.",
   "erweitert_zu": [
    "ad_as"
   ]
  },
  {
   "id": "offene_vw_finanzmarkt",
   "typ": "modell",
   "label": "Offene VW: Finanzmarkt + Devisenmarkt",
   "basis": [],
   "annahmen": [
    "kleine offene VW",
    "r = r* (exogen)",
    "vollkommene Kapitalmobilitaet",
    "kein LM (lange Frist)"
   ],
   "achsen": {
    "x": "nettokapitalexport",
    "y": "realer_wechselkurs"
   },
   "beschreibung": "Ersparnis/Investition bestimmen den Nettokapitalexport; Devisenmarkt bestimmt den realen Wechselkurs. NICHT IS-LM (kein Geldmarkt).",
   "erweitert_zu": [
    "mundell_fleming"
   ]
  },
  {
   "id": "ppp",
   "typ": "modell",
   "label": "Kaufkraftparitaet (PPP)",
   "basis": [],
   "annahmen": [
    "Arbitrage kostenlos",
    "Gueter perfekte Substitute"
   ],
   "achsen": null,
   "beschreibung": "Langfristige Bestimmung des nominalen Wechselkurses durch Arbitrage: e*P = P*."
  },
  {
   "id": "preisstarrheiten",
   "typ": "modell",
   "label": "Preisstarrheiten-Modell (Sticky Price)",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Ein Teil der Firmen hat starre Preise; steigende SRAS-Kurve. Impliziert prozyklischen Reallohn.",
   "erweitert_zu": [
    "as_kurve"
   ]
  },
  {
   "id": "unvollk_information",
   "typ": "modell",
   "label": "Modell unvollkommener Information",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Anbieter kennen eigenen Preis, nicht das Preisniveau => Geldwertillusion.",
   "erweitert_zu": [
    "as_kurve"
   ]
  },
  {
   "id": "lohnstarrheiten",
   "typ": "modell",
   "label": "Lohnstarrheiten-Modell (Sticky Wage)",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Nominallohn vor Bekanntwerden von P fixiert; impliziert antizyklischen Reallohn.",
   "erweitert_zu": [
    "as_kurve"
   ]
  },
  {
   "id": "phillips_kurve",
   "typ": "modell",
   "label": "Phillips-Kurve",
   "basis": [
    {
     "typ": "abgeleitet",
     "ids": [
      "as_kurve"
     ],
     "notiz": "Re-Ausdruck der AS-Relation im (Arbeitslosigkeit, Inflation)-Raum"
    }
   ],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "pi = pi^e - beta(u-u^n) + v. Kurzfristiger Trade-off Inflation/Arbeitslosigkeit.",
   "erweitert_zu": [
    "hysterese"
   ]
  },
  {
   "id": "hysterese",
   "typ": "modell",
   "label": "Hysterese",
   "basis": [
    {
     "typ": "abgeleitet",
     "ids": [
      "phillips_kurve"
     ],
     "notiz": "Erweiterung der Phillips-Kurve: natuerliche Rate u^n wird pfadabhaengig (neg. Schocks erhoehen u^n dauerhaft)"
    }
   ],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Negative Schocks koennen die natuerliche Rate u^n dauerhaft erhoehen."
  },
  {
   "id": "solow",
   "typ": "modell",
   "label": "Solow-Modell",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Kapitalakkumulation; Steady State. Ausserhalb der Kurzfrist-GE-Familie (anderes Zeitregime).",
   "hat_bedingungsansicht": true
  },
  {
   "id": "solow_bevoelkerung",
   "typ": "modell",
   "label": "Solow mit Bevoelkerungswachstum",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Break-even-Investitionen (delta+n)k.",
   "hat_bedingungsansicht": true
  },
  {
   "id": "solow_technologie",
   "typ": "modell",
   "label": "Solow mit technischem Fortschritt",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Effektive Arbeit L·E, E waechst mit Rate g. Steady State: Kapital/Output pro effektiver Arbeit konstant, ABER Output pro Kopf Y/L waechst dauerhaft mit g. Einzige Quelle dauerhaften Pro-Kopf-Wachstums.",
   "hat_bedingungsansicht": true
  },
  {
   "id": "ak_modell",
   "typ": "modell",
   "label": "AK-Modell (endogenes Wachstum)",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Y=A*K, konstantes MPK => dauerhaftes Wachstum ohne techn. Fortschritt.",
   "hat_bedingungsansicht": true
  },
  {
   "id": "endogen_2sektoren",
   "typ": "modell",
   "label": "Zwei-Sektoren-Modell mit F&E",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Forschungssektor erzeugt technischen Fortschritt g(u).",
   "hat_bedingungsansicht": true
  },
  {
   "id": "natuerliche_arbeitslosenquote",
   "typ": "modell",
   "label": "Modell der natuerlichen Arbeitslosenquote",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Steady-State-Arbeitsmarkt (Hall): U/L=s/(s+f)."
  },
  {
   "id": "arbeitsmarkt_lohnrigiditaet",
   "typ": "modell",
   "label": "Arbeitsmarkt mit Lohnrigiditaet",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Reallohn ueber GG => strukturelle Arbeitslosigkeit."
  },
  {
   "id": "effizienzloehne",
   "typ": "modell",
   "label": "Theorie der Effizienzloehne",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "beschreibung": "Lohn ueber GG erhoeht Produktivitaet, erzeugt aber unfreiwillige Arbeitslosigkeit."
  },
  {
   "id": "deflationsspirale",
   "typ": "modell",
   "basis": [],
   "annahmen": [],
   "achsen": null,
   "label": "Deflationsspirale",
   "beschreibung": "Sich selbst verstaerkende Nachfrage-Spirale bei fallenden Preisen (Teufelskreis). KEINE Quantitaetstheorie."
  },
  {
   "id": "offene_vw_gross_lang",
   "typ": "modell",
   "label": "Grosse offene Volkswirtschaft (lange Frist, unvollk. Kapitalmobilitaet)",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "offene_vw_finanzmarkt"
     ],
     "notiz": "gleiche Struktur (Kreditmarkt + Devisenmarkt), aber NKE(r) fallend statt r=r* horizontal. Liegt zwischen geschlossener VW (NKE=0 vertikal) und kleiner offener VW (NKE horizontal bei r*)."
    }
   ],
   "annahmen": [
    "grosse VW (kann Weltzins beeinflussen) ODER unvollkommene Kapitalmobilitaet",
    "r ENDOGEN (nicht mehr r=r*)",
    "NKE(r) fallend statt horizontal",
    "lange Frist (kein Geldmarkt/LM)"
   ],
   "achsen": {
    "x": "kreditangebot_nachfrage",
    "y": "realzins"
   },
   "beschreibung": "Mischform aus geschlossener VW (NKE=0, S=I bestimmt r) und kleiner offener VW (NKE horizontal bei r*). Kreditmarkt: S=I(r)+NKE(r) bestimmt r endogen. Devisenmarkt: NX(epsilon)=NKE bestimmt epsilon. Fiskalexpansion wirkt teils ueber Crowding-out (r hoch -> I runter, wie geschlossen), teils ueber NX (r hoch -> NKE runter -> epsilon hoch -> NX runter, wie klein offen) -- beide Kanaele gedaempft ggue. den Extremfaellen.",
   "erweitert_zu": [
    "mundell_fleming_gross"
   ]
  },
  {
   "id": "mundell_fleming_gross",
   "typ": "modell",
   "label": "Grosse offene Volkswirtschaft (kurze Frist, IS-LM mit endogenem NKE(r))",
   "basis": [
    {
     "typ": "besteht-aus",
     "ids": [
      "mundell_fleming"
     ],
     "notiz": "gleiche Grundgleichungen (Guetermarkt+Geldmarkt+Wechselkurs), aber IS-Kurve im (Y,r)-Raum statt IS* im (Y,e)-Raum -- r ist endogen, nicht = r*."
    },
    {
     "typ": "besteht-aus",
     "ids": [
      "offene_vw_gross_lang"
     ],
     "notiz": "uebernimmt NKE(r) fallend statt r=r* horizontal; NX(e)=NKE(r) verbindet Guetermarkt mit Devisenmarkt."
    }
   ],
   "annahmen": [
    "P starr (kurze Frist)",
    "r ENDOGEN (IS-LM-Logik), NICHT r=r*",
    "NKE(r) fallend -> IS-Kurve flacher als in geschlossener VW, aber nicht horizontal wie bei MF-klein",
    "flexible Wechselkurse angenommen (Standardfall grosser VW)"
   ],
   "achsen": {
    "x": "output",
    "y": "realzins"
   },
   "beschreibung": "Verbindet IS-LM (geschlossen) mit Mundell-Fleming (klein offen): Y und r werden simultan im (Y,r)-Raum durch IS (jetzt mit NKE(r)-Term) und LM bestimmt; r bestimmt dann NKE, NKE bestimmt am Devisenmarkt den Wechselkurs e. Politikwirkung liegt IMMER zwischen dem geschlossenen und dem kleinen-offenen Extremfall (Faustregel: Durchschnitt der beiden Faelle). Fiskalpolitik wirkt (anders als MF-klein, wo sie neutralisiert wird), aber schwaecher als geschlossen. Geldpolitik wirkt ueber zwei Kanaele (r runter -> I hoch UND e runter -> NX hoch).",
   "erweitert_zu": []
  },
  {
   "id": "dad_das",
   "typ": "modell",
   "label": "Dynamisches AD-AS-Modell (DAD-DAS)",
   "basis": [],
   "annahmen": [
    "Zeitindex t (Perioden); explizite Dynamik über Inflationserwartungen",
    "Geldpolitik als Zinsregel (Taylor-Regel), nicht Geldmengensteuerung",
    "Adaptive Erwartungen: erwartete Inflation nächste Periode = aktuelle Inflation",
    "geschlossene VW (Wechselkurs/Nettoexporte vernachlässigt)",
    "Parameter α,φ,θπ,θY,ρ > 0; Taylor-Prinzip θπ>0 sichert Stabilität"
   ],
   "achsen": {
    "x": "output",
    "y": "inflation"
   },
   "beschreibung": "Dynamische Reformulierung des AD-AS in der (Y,π)-Ebene. Fünf Gleichungen: Güternachfrage Y=Ȳ−α(r−ρ)+ε, Fisher r=i−π^e, Phillips π=π^e+φ(Y−Ȳ)+ν, adaptive Erwartungen π^e(t+1)=π(t), Taylor-Regel i=π+ρ+θπ(π−π*)+θY(Y−Ȳ). Daraus DAS (steigend) und DAD (fallend). Cross-verifiziert gegen Mankiw Kap16 + VL11."
  }
 ],
 "groessen": [
  {
   "id": "output",
   "symbol": "Y",
   "latex": "Y",
   "label": "Output / Einkommen / Produktionsvolumen",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "endogen",
     "achse": true
    },
    "is_lm": {
     "rolle": "endogen",
     "achse": true
    },
    "ad_as": {
     "rolle": "endogen",
     "achse": true
    },
    "mundell_fleming": {
     "rolle": "endogen",
     "achse": true
    },
    "dad_das": {
     "rolle": "endogen",
     "achse": true
    }
   }
  },
  {
   "id": "natuerliches_niveau",
   "symbol": "Ȳ",
   "latex": "\\bar{Y}",
   "label": "Natuerliches Outputniveau (Produktionspotenzial)",
   "kommentar": "Exogen im Kurzfrist-Modell; wird durch Produktionsfaktoren bestimmt (Solow erklaert den Balken).",
   "rollen": {
    "ad_as": {
     "rolle": "exogen",
     "achse": false
    },
    "geldmarkt_quantitaet": {
     "rolle": "exogen",
     "achse": false
    },
    "as_kurve": {
     "rolle": "exogen",
     "achse": false
    },
    "dad_das": {
     "rolle": "exogen"
    }
   }
  },
  {
   "id": "geplante_ausgaben",
   "symbol": "E",
   "latex": "E",
   "label": "Geplante Ausgaben (E = C + I + G [+ NX])",
   "kommentar": "Symbol-Kollision: E = auch Arbeitseffizienz (Wachstum) und Erwerbstaetige (Arbeitsmarkt) -> andere Knoten.",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "endogen",
     "achse": true
    }
   }
  },
  {
   "id": "konsum",
   "symbol": "C",
   "latex": "C(Y-T)",
   "label": "Konsum (Konsumfunktion)",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "endogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "investition",
   "symbol": "I",
   "latex": "I(r)",
   "label": "Investitionen (zinsabhaengig)",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "endogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "endogen",
     "achse": false
    },
    "mundell_fleming": {
     "rolle": "endogen",
     "achse": false,
     "kommentar": "I(r*)"
    }
   }
  },
  {
   "id": "staatsausgaben",
   "symbol": "G",
   "latex": "\\bar{G}",
   "label": "Staatsausgaben (Politikvariable)",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "exogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "exogen",
     "achse": false
    },
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "steuern",
   "symbol": "T",
   "latex": "\\bar{T}",
   "label": "Steuern (Politikvariable)",
   "kommentar": "Achtung Folie 08: dort als 'Transferleistungen' bezeichnet, aber wie Steuern (Y-T) behandelt -> als Steuern fuehren.",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "exogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "exogen",
     "achse": false
    },
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "mpc",
   "symbol": "MPC",
   "latex": "MPC",
   "label": "Marginale Konsumneigung (Parameter)",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "realzins",
   "symbol": "r",
   "latex": "r",
   "label": "Realzinssatz",
   "kommentar": "PARADEBEISPIEL modell-relativer Rolle: endogen in IS-LM, exogen (=r*) in Mundell-Fleming.",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "gegeben, nur Guetermarkt"
    },
    "liquiditaetspraeferenz": {
     "rolle": "endogen",
     "achse": true
    },
    "is_lm": {
     "rolle": "endogen",
     "achse": true
    },
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "= r* (Weltzins)"
    },
    "dad_das": {
     "rolle": "endogen"
    }
   }
  },
  {
   "id": "nominalzins",
   "symbol": "i",
   "latex": "i",
   "label": "Nominaler Zinssatz (Fisher: i = r + pi^e)",
   "rollen": {
    "liquiditaetspraeferenz": {
     "rolle": "endogen",
     "achse": false
    },
    "geldmarkt_quantitaet": {
     "rolle": "endogen",
     "achse": false
    },
    "dad_das": {
     "rolle": "endogen"
    }
   }
  },
  {
   "id": "weltzins",
   "symbol": "r*",
   "latex": "r^*",
   "label": "Weltmarktzins (exogen, kleine offene VW)",
   "rollen": {
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false
    },
    "offene_vw_finanzmarkt": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "risikoaufschlag",
   "symbol": "θ",
   "latex": "\\theta",
   "label": "Risikoaufschlag / Laenderrisiko (r = r* + theta)",
   "rollen": {
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "Erweiterung"
    }
   }
  },
  {
   "id": "geldmenge",
   "symbol": "M",
   "latex": "M",
   "label": "Geldmenge / Geldangebot (Zentralbank)",
   "rollen": {
    "liquiditaetspraeferenz": {
     "rolle": "exogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "exogen",
     "achse": false
    },
    "geldmarkt_quantitaet": {
     "rolle": "exogen",
     "achse": false
    },
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "bei festen WK endogen (Interventionspflicht)"
    }
   }
  },
  {
   "id": "reales_geldangebot",
   "symbol": "M/P",
   "latex": "M/P",
   "label": "Reales Geldangebot / Realkasse",
   "rollen": {
    "liquiditaetspraeferenz": {
     "rolle": "endogen",
     "achse": true
    },
    "is_lm": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "geldnachfrage",
   "symbol": "L",
   "latex": "L(i,Y)",
   "label": "Geldnachfrage / Liquiditaetspraeferenz",
   "kommentar": "Symbol-Kollision: L = auch Arbeit (Wachstum/Arbeitsmarkt) -> anderer Knoten.",
   "rollen": {
    "liquiditaetspraeferenz": {
     "rolle": "endogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "umlaufgeschwindigkeit",
   "symbol": "V",
   "latex": "V",
   "label": "Umlaufgeschwindigkeit des Geldes (Parameter)",
   "rollen": {
    "geldmarkt_quantitaet": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "preisniveau",
   "symbol": "P",
   "latex": "P",
   "label": "Preisniveau",
   "kommentar": "Modell-relativ: fix/exogen in Keynes-Kreuz, IS-LM, MF (kurze Frist); endogen in AD-AS.",
   "rollen": {
    "keynes_kreuz": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "P fix"
    },
    "is_lm": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "P fix"
    },
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "P starr, kurze Frist"
    },
    "ad_as": {
     "rolle": "endogen",
     "achse": true
    },
    "geldmarkt_quantitaet": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "erwartetes_preisniveau",
   "symbol": "P^e",
   "latex": "P^e \\equiv \\mathbb{E}P",
   "label": "Erwartetes Preisniveau",
   "rollen": {
    "ad_as": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "Erwartung; SRAS verschiebt sich, wenn P^e sich anpasst"
    },
    "as_kurve": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "inflation_erwartet",
   "symbol": "π^e",
   "latex": "\\pi^e",
   "label": "Erwartete Inflation",
   "rollen": {
    "geldmarkt_quantitaet": {
     "rolle": "exogen",
     "achse": false
    },
    "is_lm": {
     "rolle": "exogen",
     "achse": false,
     "kommentar": "erweitertes IS-LM r = i - pi^e"
    },
    "dad_das": {
     "rolle": "endogen"
    }
   }
  },
  {
   "id": "nettoexporte",
   "symbol": "NX",
   "latex": "NX(\\epsilon)",
   "label": "Nettoexporte / Leistungsbilanzsaldo",
   "rollen": {
    "mundell_fleming": {
     "rolle": "endogen",
     "achse": false
    },
    "offene_vw_finanzmarkt": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "nominaler_wechselkurs",
   "symbol": "e",
   "latex": "e",
   "label": "Nominaler Wechselkurs",
   "rollen": {
    "mundell_fleming": {
     "rolle": "endogen",
     "achse": true,
     "kommentar": "bei festen WK exogen/fixiert"
    }
   }
  },
  {
   "id": "realer_wechselkurs",
   "symbol": "ε",
   "latex": "\\epsilon",
   "label": "Realer Wechselkurs (epsilon = e*P/P*)",
   "rollen": {
    "mundell_fleming": {
     "rolle": "endogen",
     "achse": false,
     "kommentar": "kurze Frist e=epsilon"
    },
    "offene_vw_finanzmarkt": {
     "rolle": "endogen",
     "achse": true
    }
   }
  },
  {
   "id": "auslaendisches_preisniveau",
   "symbol": "P*",
   "latex": "P^*",
   "label": "Auslaendisches Preisniveau",
   "rollen": {
    "mundell_fleming": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "reales_vermoegen",
   "symbol": "Verm.",
   "latex": "\\text{reales Verm.}",
   "label": "Reales Vermoegen (Kaufkraft)",
   "rollen": {
    "is_lm": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "reale_schuldenlast",
   "symbol": "Schuld",
   "latex": "\\text{reale Schuld}",
   "label": "Reale Schuldenlast",
   "rollen": {
    "is_lm": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "inflation",
   "symbol": "π",
   "latex": "\\pi",
   "label": "Inflationsrate",
   "rollen": {
    "geldmarkt_quantitaet": {
     "rolle": "endogen",
     "achse": false
    },
    "dad_das": {
     "rolle": "endogen",
     "achse": true
    }
   }
  },
  {
   "id": "geldhaltung",
   "symbol": "Geld_H",
   "latex": "\\text{Geldhaltung}",
   "label": "Geldhaltung",
   "rollen": {
    "geldmarkt_quantitaet": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "transaktionskosten",
   "symbol": "TK",
   "latex": "\\text{T-Kosten}",
   "label": "Transaktionskosten (Schuhsohlen)",
   "rollen": {
    "geldmarkt_quantitaet": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "produktionskosten",
   "symbol": "Kosten",
   "latex": "\\text{Kosten}",
   "label": "Produktionskosten",
   "rollen": {
    "ad_as": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "ersparnis",
   "symbol": "S",
   "latex": "S",
   "label": "Nationale Ersparnis",
   "rollen": {
    "offene_vw_finanzmarkt": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "nettokapitalexport",
   "symbol": "S-I",
   "latex": "S-I",
   "label": "Nettokapitalexport (Euro-Angebot am Devisenmarkt)",
   "rollen": {
    "offene_vw_finanzmarkt": {
     "rolle": "endogen",
     "achse": true
    },
    "offene_vw_gross_lang": {
     "rolle": "endogen",
     "achse": true,
     "kommentar": "hier NKE(r) fallend, nicht mehr exogenes S-I bei r*"
    },
    "mundell_fleming_gross": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "exporte",
   "symbol": "EX",
   "latex": "EX",
   "label": "Exporte",
   "rollen": {
    "offene_vw_finanzmarkt": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "importe",
   "symbol": "IM",
   "latex": "IM",
   "label": "Importe",
   "rollen": {
    "offene_vw_finanzmarkt": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "reallohn",
   "symbol": "W/P",
   "latex": "W/P",
   "label": "Reallohn",
   "rollen": {
    "preisstarrheiten": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "nominallohn",
   "symbol": "W",
   "latex": "W",
   "label": "Nominallohn",
   "rollen": {
    "lohnstarrheiten": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "zielreallohn",
   "symbol": "ω",
   "latex": "omega",
   "label": "Zielreallohn",
   "rollen": {
    "lohnstarrheiten": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "beschaeftigung",
   "symbol": "N",
   "latex": "N",
   "label": "Beschaeftigung",
   "rollen": {
    "preisstarrheiten": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "arbeitslosigkeit",
   "symbol": "u",
   "latex": "u",
   "label": "Arbeitslosenquote",
   "rollen": {
    "phillips_kurve": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "natuerliche_rate",
   "symbol": "u^n",
   "latex": "u^n",
   "label": "Natuerliche Arbeitslosenquote (NAIRU)",
   "rollen": {
    "phillips_kurve": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "angebotsschock",
   "symbol": "v",
   "latex": "v",
   "label": "Angebotsschock",
   "rollen": {
    "phillips_kurve": {
     "rolle": "exogen",
     "achse": false
    },
    "dad_das": {
     "rolle": "exogen"
    }
   }
  },
  {
   "id": "sparquote",
   "symbol": "s",
   "latex": "s",
   "label": "Sparquote",
   "rollen": {
    "solow": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "invest_prokopf",
   "symbol": "i",
   "latex": "i",
   "label": "Investitionen pro Kopf",
   "rollen": {
    "solow": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "kapital_pro_kopf",
   "symbol": "k",
   "latex": "k",
   "label": "Kapital pro Kopf",
   "rollen": {
    "solow": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "output_pro_kopf",
   "symbol": "y",
   "latex": "y",
   "label": "Output pro Kopf",
   "rollen": {
    "solow": {
     "rolle": "endogen",
     "achse": false
    },
    "solow_technologie": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "konsum_prokopf",
   "symbol": "c",
   "latex": "c",
   "label": "Konsum pro Kopf",
   "rollen": {
    "solow": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "bevoelkerungswachstum",
   "symbol": "n",
   "latex": "n",
   "label": "Bevoelkerungswachstum",
   "rollen": {
    "solow_bevoelkerung": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "tfp",
   "symbol": "A",
   "latex": "A",
   "label": "Totale Faktorproduktivitaet",
   "rollen": {
    "ak_modell": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "kapital",
   "symbol": "K",
   "latex": "K",
   "label": "Kapitalstock",
   "rollen": {
    "ak_modell": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "forschungsquote",
   "symbol": "u_F",
   "latex": "u_F",
   "label": "Anteil Erwerbspersonen in Forschung",
   "rollen": {
    "endogen_2sektoren": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "techn_fortschritt",
   "symbol": "g",
   "latex": "g",
   "label": "Technischer Fortschritt",
   "rollen": {
    "endogen_2sektoren": {
     "rolle": "endogen",
     "achse": false
    },
    "solow_technologie": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "jobfindungsrate",
   "symbol": "f",
   "latex": "f",
   "label": "Jobfindungsrate",
   "rollen": {
    "natuerliche_arbeitslosenquote": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "arbeitslosenversicherung",
   "symbol": "AV",
   "latex": "AV",
   "label": "Arbeitslosenversicherung",
   "rollen": {
    "natuerliche_arbeitslosenquote": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "sektoraler_wandel",
   "symbol": "Wandel",
   "latex": "Wandel",
   "label": "Sektoraler Wandel",
   "rollen": {
    "natuerliche_arbeitslosenquote": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "produktivitaet",
   "symbol": "Prod.",
   "latex": "Prod.",
   "label": "Arbeitsproduktivitaet",
   "rollen": {
    "effizienzloehne": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "separationsrate",
   "symbol": "s",
   "latex": "s",
   "label": "Separationsrate (Job-Trennungsrate)",
   "rollen": {
    "natuerliche_arbeitslosenquote": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "grenzprodukt_arbeit",
   "symbol": "MPL",
   "latex": "MPL",
   "label": "Grenzprodukt der Arbeit",
   "rollen": {
    "arbeitsmarkt_lohnrigiditaet": {
     "rolle": "exogen",
     "achse": true
    }
   }
  },
  {
   "id": "arbeitsnachfrage",
   "symbol": "Lᵈ",
   "latex": "L^d",
   "label": "Arbeitsnachfrage",
   "rollen": {
    "arbeitsmarkt_lohnrigiditaet": {
     "rolle": "endogen",
     "achse": true
    }
   }
  },
  {
   "id": "arbeitsangebot",
   "symbol": "Lˢ",
   "latex": "L^s",
   "label": "Arbeitsangebot",
   "rollen": {
    "arbeitsmarkt_lohnrigiditaet": {
     "rolle": "endogen",
     "achse": true
    }
   }
  },
  {
   "id": "mindestlohn",
   "symbol": "w_min",
   "latex": "w_{min}",
   "label": "Mindestlohn",
   "rollen": {
    "arbeitsmarkt_lohnrigiditaet": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "gewerkschaftslohn",
   "symbol": "w_gew",
   "latex": "w_{union}",
   "label": "Gewerkschaftslohn",
   "rollen": {
    "arbeitsmarkt_lohnrigiditaet": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "wechselkursdruck",
   "symbol": "e±",
   "latex": "\\text{e-Druck}",
   "label": "Wechselkursdruck (Auf-/Abwertungstendenz bei festem e)",
   "rollen": {
    "mundell_fleming": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "arbeitseffizienz",
   "symbol": "E",
   "latex": "E",
   "label": "Arbeitseffizienz",
   "rollen": {
    "solow_technologie": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "kreditangebot_nachfrage",
   "symbol": "S, I+NKE",
   "latex": "S = I(r) + NKE(r)",
   "label": "Kreditmarkt-Gleichgewicht (grosse offene VW)",
   "kommentar": "Ersparnis S (vertikal, exogen) trifft auf Kreditnachfrage I(r)+NKE(r) (fallend). r ist hier ENDOGEN -- anders als in der kleinen offenen VW, wo r=r* exogen fix ist.",
   "rollen": {
    "offene_vw_gross_lang": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "wachstumsrate_prokopf",
   "symbol": "Δk/k",
   "latex": "\\Delta k / k",
   "label": "Wachstumsrate des Kapitals pro Kopf",
   "rollen": {
    "solow": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "steigung_sras",
   "symbol": "α",
   "latex": "\\alpha",
   "label": "SRAS-Steigungsparameter",
   "kommentar": "α = s/[(1-s)*b]; je groesser der Anteil starrer Preise s bzw. je kleiner b, desto groesser α => flachere P=EP+(1/α)(Y-Ybar)-Darstellung, aber steilere Y=Ybar+α(P-EP)-Form ist bei kleinem α steiler in (Y,P). Kehrwert 1/α ist die Steigung der SRAS-Kurve im (Y,P)-Diagramm.",
   "rollen": {
    "as_kurve": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "steigung_phillips",
   "symbol": "β",
   "latex": "\\beta",
   "label": "Phillips-Reaktionskoeffizient",
   "kommentar": "Parameter, der die Reaktion der Inflation auf die zyklische Arbeitslosigkeit (u-u^n) misst; bestimmt die Steigung der Phillips-Kurve im (u,π)-Diagramm.",
   "rollen": {
    "phillips_kurve": {
     "rolle": "exogen",
     "achse": false
    }
   }
  },
  {
   "id": "opferverhaeltnis",
   "symbol": "SR",
   "latex": "\\text{SR}",
   "label": "Opferverhaeltnis (Sacrifice Ratio)",
   "kommentar": "Prozentpunkte reales BIP eines Jahres, die aufgegeben werden muessen, um die Inflation um einen Prozentpunkt zu senken. Beispielwert im Lehrbuch/VL: 5 (bzw. 2,8 im USA-1981-85-Beispiel).",
   "rollen": {
    "phillips_kurve": {
     "rolle": "endogen",
     "achse": false
    }
   }
  },
  {
   "id": "inflationsziel",
   "symbol": "π*",
   "latex": "\\pi^*",
   "label": "Inflationsziel der Zentralbank",
   "rollen": {
    "dad_das": {
     "rolle": "exogen"
    }
   }
  },
  {
   "id": "nachfrageschock",
   "symbol": "ε",
   "latex": "\\varepsilon",
   "label": "Nachfrageschock (dynamisches Modell)",
   "rollen": {
    "dad_das": {
     "rolle": "exogen"
    }
   }
  }
 ],
 "kanten": [
  {
   "id": "e_M_MP",
   "von": "geldmenge",
   "nach": "reales_geldangebot",
   "vorzeichen": "+",
   "modell": "liquiditaetspraeferenz",
   "mechanismus": "M steigt bei fixem P => reales Geldangebot M/P steigt"
  },
  {
   "id": "e_MP_r",
   "von": "reales_geldangebot",
   "nach": "realzins",
   "vorzeichen": "-",
   "modell": "liquiditaetspraeferenz",
   "mechanismus": "groesseres reales Geldangebot senkt den Zins (Liquiditaetspraeferenz)"
  },
  {
   "id": "e_r_I",
   "von": "realzins",
   "nach": "investition",
   "vorzeichen": "-",
   "modell": "is_kurve",
   "mechanismus": "niedrigerer Realzins => mehr lohnende Investitionen I(r)"
  },
  {
   "id": "e_I_Y",
   "von": "investition",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "is_kurve",
   "mechanismus": "mehr Investitionen => hoehere geplante Ausgaben => Y steigt"
  },
  {
   "id": "e_G_Y",
   "von": "staatsausgaben",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "is_kurve",
   "mechanismus": "G steigt => IS-Kurve verschiebt sich nach rechts => Y steigt (Multiplikator)"
  },
  {
   "id": "e_Y_r",
   "von": "output",
   "nach": "realzins",
   "vorzeichen": "+",
   "modell": "is_lm",
   "mechanismus": "Y steigt => hoehere Geldnachfrage; bei konstantem M/P steigt r (Bewegung entlang der LM-Kurve)"
  },
  {
   "id": "e_Y_L",
   "von": "output",
   "nach": "geldnachfrage",
   "vorzeichen": "+",
   "modell": "lm_kurve",
   "mechanismus": "hoeheres Y => mehr Transaktionskasse => Geldnachfrage steigt"
  },
  {
   "id": "e_L_r",
   "von": "geldnachfrage",
   "nach": "realzins",
   "vorzeichen": "+",
   "modell": "lm_kurve",
   "mechanismus": "hoehere Geldnachfrage bei fixem M/P => r steigt"
  },
  {
   "id": "e_T_Y",
   "von": "steuern",
   "nach": "output",
   "vorzeichen": "-",
   "modell": "is_kurve",
   "mechanismus": "T sinkt => verfuegbares Einkommen und Konsum steigen => IS nach rechts => Y steigt (Effekt kleiner als bei G, da 1-MPC gespart wird)"
  },
  {
   "id": "e_P_MP",
   "von": "preisniveau",
   "nach": "reales_geldangebot",
   "vorzeichen": "-",
   "modell": "is_lm",
   "mechanismus": "P steigt => reales Geldangebot M/P sinkt (LM verschiebt sich nach links)"
  },
  {
   "id": "e_MP_vermoegen",
   "von": "reales_geldangebot",
   "nach": "reales_vermoegen",
   "vorzeichen": "+",
   "modell": "is_lm",
   "mechanismus": "hoehere Realkasse => hoeheres reales Vermoegen (Pigou-Effekt)"
  },
  {
   "id": "e_vermoegen_C",
   "von": "reales_vermoegen",
   "nach": "konsum",
   "vorzeichen": "+",
   "modell": "is_kurve",
   "mechanismus": "hoeheres reales Vermoegen => mehr Konsum"
  },
  {
   "id": "e_C_Y",
   "von": "konsum",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "is_kurve",
   "mechanismus": "mehr Konsum => IS nach rechts => Y steigt"
  },
  {
   "id": "e_pie_r",
   "von": "inflation_erwartet",
   "nach": "realzins",
   "vorzeichen": "-",
   "modell": "is_lm",
   "mechanismus": "pi^e sinkt => Realzins r = i - pi^e steigt ex ante (bei traegem Nominalzins i)"
  },
  {
   "id": "e_P_schuld",
   "von": "preisniveau",
   "nach": "reale_schuldenlast",
   "vorzeichen": "-",
   "modell": "is_lm",
   "mechanismus": "P sinkt unerwartet => reale Schuldenlast der Schuldner steigt"
  },
  {
   "id": "e_schuld_ausgaben",
   "von": "reale_schuldenlast",
   "nach": "geplante_ausgaben",
   "vorzeichen": "-",
   "modell": "is_kurve",
   "mechanismus": "hoehere Schuldenlast; da MPC der Schuldner > Glaeubiger => Gesamtausgaben sinken"
  },
  {
   "id": "e_ausgaben_Y",
   "von": "geplante_ausgaben",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "is_kurve",
   "mechanismus": "geringere geplante Ausgaben => IS nach links => Y sinkt"
  },
  {
   "id": "e_Gmf_Y",
   "von": "staatsausgaben",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "G steigt => IS*-Kurve nach rechts => Y-Druck (kurzfristig)"
  },
  {
   "id": "e_Ymf_e",
   "von": "output",
   "nach": "nominaler_wechselkurs",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "Y-Druck => r>r* => Nettokapitalimporte => Nachfrage nach inl. Waehrung => e steigt"
  },
  {
   "id": "e_e_NX",
   "von": "nominaler_wechselkurs",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "e steigt => inl. Gueter relativ teurer => Nettoexporte sinken"
  },
  {
   "id": "e_NX_Y",
   "von": "nettoexporte",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "Nettoexporte sinken => Y sinkt"
  },
  {
   "id": "e_M_e",
   "von": "geldmenge",
   "nach": "nominaler_wechselkurs",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "M steigt => LM* nach rechts; da r=r*, muss e sinken"
  },
  {
   "id": "e_Gmf_epress",
   "von": "staatsausgaben",
   "nach": "wechselkursdruck",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "G steigt => IS* nach rechts => Aufwertungsdruck (e bleibt fix)"
  },
  {
   "id": "e_epress_M",
   "von": "wechselkursdruck",
   "nach": "geldmenge",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "um e fest zu halten, weitet die ZB die Geldmenge aus"
  },
  {
   "id": "e_M_Ymf",
   "von": "geldmenge",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "M steigt => LM* nach rechts => Y steigt"
  },
  {
   "id": "e_Mtry_epress",
   "von": "geldmenge",
   "nach": "wechselkursdruck",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "M-Erhoehung => Abwertungsdruck (e bleibt fix)"
  },
  {
   "id": "e_epress_Mback",
   "von": "wechselkursdruck",
   "nach": "geldmenge",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "ZB kauft inl. Waehrung zurueck => Geldmenge schrumpft wieder"
  },
  {
   "id": "e_M_P",
   "von": "geldmenge",
   "nach": "preisniveau",
   "vorzeichen": "+",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "M steigt bei gegebenem V und Y => P steigt 1:1 (MV=PY)"
  },
  {
   "id": "e_pie_i",
   "von": "inflation_erwartet",
   "nach": "nominalzins",
   "vorzeichen": "+",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "Fisher-Effekt: i = r + pi^e => i steigt mit pi^e"
  },
  {
   "id": "e_i_L",
   "von": "nominalzins",
   "nach": "geldnachfrage",
   "vorzeichen": "-",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "hoeheres i => hoehere Opportunitaetskosten der Geldhaltung => Geldnachfrage sinkt"
  },
  {
   "id": "e_L_P",
   "von": "geldnachfrage",
   "nach": "preisniveau",
   "vorzeichen": "-",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "geringere reale Geldnachfrage => P steigt, damit M/P sinkt (Geldmarkt-GG)"
  },
  {
   "id": "e_P_ausgaben",
   "von": "preisniveau",
   "nach": "geplante_ausgaben",
   "vorzeichen": "+",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "fallende Preise => Konsum wird in Erwartung weiterer Rueckgaenge vertagt => Ausgaben sinken"
  },
  {
   "id": "e_pi_i",
   "von": "inflation",
   "nach": "nominalzins",
   "vorzeichen": "+",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "Fisher: hoehere Inflation => hoeherer Nominalzins i"
  },
  {
   "id": "e_i_geldhaltung",
   "von": "nominalzins",
   "nach": "geldhaltung",
   "vorzeichen": "-",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "hoeheres i => weniger Geldhaltung (Inflationssteuer umgehen)"
  },
  {
   "id": "e_geldhaltung_kosten",
   "von": "geldhaltung",
   "nach": "transaktionskosten",
   "vorzeichen": "-",
   "modell": "geldmarkt_quantitaet",
   "mechanismus": "weniger Geldhaltung => haeufiger zur Bank => Transaktionskosten steigen"
  },
  {
   "id": "e_kosten_P",
   "von": "produktionskosten",
   "nach": "preisniveau",
   "vorzeichen": "+",
   "modell": "ad_as",
   "mechanismus": "Kostenschock => SRAS-Kurve nach oben => P steigt"
  },
  {
   "id": "e_P_Y_ad",
   "von": "preisniveau",
   "nach": "output",
   "vorzeichen": "-",
   "modell": "ad_as",
   "mechanismus": "hoeheres P => Bewegung entlang der AD-Kurve => Y sinkt"
  },
  {
   "id": "e_G_E",
   "von": "staatsausgaben",
   "nach": "geplante_ausgaben",
   "vorzeichen": "+",
   "modell": "keynes_kreuz",
   "mechanismus": "G steigt => geplante Ausgaben E = C+I+G steigen"
  },
  {
   "id": "e_E_Y",
   "von": "geplante_ausgaben",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "keynes_kreuz",
   "mechanismus": "hoehere geplante Ausgaben => Y steigt (Y=E)"
  },
  {
   "id": "e_T_C",
   "von": "steuern",
   "nach": "konsum",
   "vorzeichen": "-",
   "modell": "keynes_kreuz",
   "mechanismus": "T steigt => verfuegbares Einkommen sinkt => Konsum sinkt (-MPC*dT)"
  },
  {
   "id": "e_C_E",
   "von": "konsum",
   "nach": "geplante_ausgaben",
   "vorzeichen": "+",
   "modell": "keynes_kreuz",
   "mechanismus": "hoeherer Konsum => hoehere geplante Ausgaben"
  },
  {
   "id": "e_G_S",
   "von": "staatsausgaben",
   "nach": "ersparnis",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "G steigt (oder T sinkt) => nationale Ersparnis S sinkt"
  },
  {
   "id": "e_S_NKE",
   "von": "ersparnis",
   "nach": "nettokapitalexport",
   "vorzeichen": "+",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "geringere Ersparnis => Nettokapitalexport (S-I) sinkt"
  },
  {
   "id": "e_NKE_eps",
   "von": "nettokapitalexport",
   "nach": "realer_wechselkurs",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "(S-I) sinkt => weniger Euro-Angebot => realer Wechselkurs steigt"
  },
  {
   "id": "e_eps_NX",
   "von": "realer_wechselkurs",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "hoeherer realer Wechselkurs => inl. Gueter teurer => NX sinken"
  },
  {
   "id": "e_rstern_I",
   "von": "weltzins",
   "nach": "investition",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "r* steigt => inl. Investitionsnachfrage sinkt"
  },
  {
   "id": "e_I_NKE",
   "von": "investition",
   "nach": "nettokapitalexport",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "I sinkt (S konstant) => (S-I) steigt"
  },
  {
   "id": "e_NKE_NX",
   "von": "nettokapitalexport",
   "nach": "nettoexporte",
   "vorzeichen": "+",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "(S-I) steigt => NX steigen"
  },
  {
   "id": "e_IM_NX2",
   "von": "importe",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "Importbeschraenkung: IM sinken => NX steigen initial"
  },
  {
   "id": "e_NX_eps",
   "von": "nettoexporte",
   "nach": "realer_wechselkurs",
   "vorzeichen": "+",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "hoehere NX => hoehere Euro-Nachfrage => realer Wechselkurs steigt"
  },
  {
   "id": "e_eps_EX",
   "von": "realer_wechselkurs",
   "nach": "exporte",
   "vorzeichen": "-",
   "modell": "offene_vw_finanzmarkt",
   "mechanismus": "hoeherer realer Wechselkurs => inl. Gueter teurer => Exporte sinken"
  },
  {
   "id": "e_pi_e",
   "von": "inflation",
   "nach": "nominaler_wechselkurs",
   "vorzeichen": "-",
   "modell": "ppp",
   "mechanismus": "hoehere relative Inflation => nominale Abwertung (Wachstumsrate von e sinkt)"
  },
  {
   "id": "e_Y_P_sticky",
   "von": "output",
   "nach": "preisniveau",
   "vorzeichen": "+",
   "modell": "preisstarrheiten",
   "mechanismus": "Y steigt => Firmen mit flexiblen Preisen erhoehen Preise => P steigt (steigende SRAS)"
  },
  {
   "id": "e_Y_N",
   "von": "output",
   "nach": "beschaeftigung",
   "vorzeichen": "+",
   "modell": "preisstarrheiten",
   "mechanismus": "Y sinkt => Firmen mit starren Preisen drosseln Produktion => Arbeitsnachfrage sinkt"
  },
  {
   "id": "e_N_reallohn",
   "von": "beschaeftigung",
   "nach": "reallohn",
   "vorzeichen": "+",
   "modell": "preisstarrheiten",
   "mechanismus": "geringere Arbeitsnachfrage => Reallohn sinkt (prozyklisch)"
  },
  {
   "id": "e_Pillusion_Y",
   "von": "preisniveau",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "unvollk_information",
   "mechanismus": "P steigt unerwartet => Anbieter ueberschaetzt relativen Preis (Geldwertillusion) => weitet Produktion aus => Y steigt"
  },
  {
   "id": "e_P_reallohn",
   "von": "preisniveau",
   "nach": "reallohn",
   "vorzeichen": "-",
   "modell": "lohnstarrheiten",
   "mechanismus": "P steigt bei fixem Nominallohn W => Reallohn W/P sinkt unter Zielwert"
  },
  {
   "id": "e_reallohn_N",
   "von": "reallohn",
   "nach": "beschaeftigung",
   "vorzeichen": "-",
   "modell": "lohnstarrheiten",
   "mechanismus": "niedrigerer Reallohn => Firmen stellen mehr Arbeiter ein"
  },
  {
   "id": "e_N_Y",
   "von": "beschaeftigung",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "lohnstarrheiten",
   "mechanismus": "mehr Beschaeftigung => Output steigt ueber natuerliches Niveau"
  },
  {
   "id": "e_Y_Pe",
   "von": "output",
   "nach": "erwartetes_preisniveau",
   "vorzeichen": "+",
   "modell": "ad_as",
   "mechanismus": "Y>Ybar => mit der Zeit steigt das erwartete Preisniveau P^e"
  },
  {
   "id": "e_Pe_Y",
   "von": "erwartetes_preisniveau",
   "nach": "output",
   "vorzeichen": "-",
   "modell": "ad_as",
   "mechanismus": "P^e steigt => SRAS verschiebt sich nach oben => Y zurueck zu Ybar"
  },
  {
   "id": "e_u_pi",
   "von": "arbeitslosigkeit",
   "nach": "inflation",
   "vorzeichen": "-",
   "modell": "phillips_kurve",
   "mechanismus": "u unter u^n (hohe Nachfrage) => Preisdruck => Inflation steigt; u ueber u^n => Inflation sinkt"
  },
  {
   "id": "e_v_pi",
   "von": "angebotsschock",
   "nach": "inflation",
   "vorzeichen": "+",
   "modell": "phillips_kurve",
   "mechanismus": "negativer Angebotsschock (v>0) => Produktionskosten hoch => Preise hoch => Inflation steigt"
  },
  {
   "id": "e_M_u",
   "von": "geldmenge",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "-",
   "modell": "phillips_kurve",
   "mechanismus": "kontraktive Geldpolitik daempft Nachfrage => Arbeitslosigkeit steigt ueber u^n"
  },
  {
   "id": "e_pie_pi",
   "von": "inflation_erwartet",
   "nach": "inflation",
   "vorzeichen": "+",
   "modell": "phillips_kurve",
   "mechanismus": "glaubhafte Ankuendigung => pi^e sinkt sofort => Inflation sinkt (rationale Erwartungen)"
  },
  {
   "id": "e_u_dequal",
   "von": "arbeitslosigkeit",
   "nach": "natuerliche_rate",
   "vorzeichen": "+",
   "modell": "hysterese",
   "mechanismus": "lange zyklische Arbeitslosigkeit => Dequalifikation/Insider => u^n steigt dauerhaft"
  },
  {
   "id": "e_s_i",
   "von": "sparquote",
   "nach": "invest_prokopf",
   "vorzeichen": "+",
   "modell": "solow",
   "mechanismus": "s steigt => Investitionen s*f(k) steigen"
  },
  {
   "id": "e_i_k",
   "von": "invest_prokopf",
   "nach": "kapital_pro_kopf",
   "vorzeichen": "+",
   "modell": "solow",
   "mechanismus": "Investitionen > Abschreibungen => Kapital pro Kopf k waechst"
  },
  {
   "id": "e_k_y",
   "von": "kapital_pro_kopf",
   "nach": "output_pro_kopf",
   "vorzeichen": "+",
   "modell": "solow",
   "mechanismus": "y=f(k) => hoeheres k => hoeheres y"
  },
  {
   "id": "e_s_c",
   "von": "sparquote",
   "nach": "konsum_prokopf",
   "vorzeichen": "-",
   "modell": "solow",
   "mechanismus": "hoehere Sparquote => Konsum pro Kopf kurzfristig niedriger"
  },
  {
   "id": "e_n_k",
   "von": "bevoelkerungswachstum",
   "nach": "kapital_pro_kopf",
   "vorzeichen": "-",
   "modell": "solow_bevoelkerung",
   "mechanismus": "n steigt => Break-even-Investitionen (delta+n)k steigen => k pro Kopf sinkt"
  },
  {
   "id": "e_sA_K",
   "von": "tfp",
   "nach": "kapital",
   "vorzeichen": "+",
   "modell": "ak_modell",
   "mechanismus": "s*A>delta => Investitionen > Abschreibungen dauerhaft => Kapitalstock K waechst permanent"
  },
  {
   "id": "e_K_Y",
   "von": "kapital",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "ak_modell",
   "mechanismus": "K waechst => Y waechst permanent (konstantes MPK)"
  },
  {
   "id": "e_uF_g",
   "von": "forschungsquote",
   "nach": "techn_fortschritt",
   "vorzeichen": "+",
   "modell": "endogen_2sektoren",
   "mechanismus": "mehr Forscher => g(u) steigt"
  },
  {
   "id": "e_g_y",
   "von": "techn_fortschritt",
   "nach": "output_pro_kopf",
   "vorzeichen": "+",
   "modell": "endogen_2sektoren",
   "mechanismus": "hoeheres g => dauerhaft hoehere Pro-Kopf-Wachstumsrate"
  },
  {
   "id": "e_wandel_u",
   "von": "sektoraler_wandel",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "+",
   "modell": "natuerliche_arbeitslosenquote",
   "mechanismus": "Nachfrageverschiebung zwischen Sektoren => Suchzeit => friktionelle Arbeitslosigkeit"
  },
  {
   "id": "e_av_f",
   "von": "arbeitslosenversicherung",
   "nach": "jobfindungsrate",
   "vorzeichen": "-",
   "modell": "natuerliche_arbeitslosenquote",
   "mechanismus": "AV => geringere Suchdringlichkeit/Opportunitaetskosten => Jobfindungsrate f sinkt"
  },
  {
   "id": "e_f_u",
   "von": "jobfindungsrate",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "-",
   "modell": "natuerliche_arbeitslosenquote",
   "mechanismus": "f sinkt => Dauer der Arbeitslosigkeit steigt => U/L steigt"
  },
  {
   "id": "e_reallohn_al",
   "von": "reallohn",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "+",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "mechanismus": "Reallohn ueber GG => Arbeitsangebot > Arbeitsnachfrage => unfreiwillige (strukturelle) Arbeitslosigkeit"
  },
  {
   "id": "e_reallohn_prod",
   "von": "reallohn",
   "nach": "produktivitaet",
   "vorzeichen": "+",
   "modell": "effizienzloehne",
   "mechanismus": "hoehere Loehne => hoehere Produktivitaet (Motivation, weniger Fluktuation)"
  },
  {
   "id": "e_separationsrate_u",
   "von": "separationsrate",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "+",
   "modell": "natuerliche_arbeitslosenquote",
   "mechanismus": "s steigt => mehr Erwerbstaetige verlieren pro Periode ihren Job => bei gegebenem f steigt die Steady-State-Quote u=s/(s+f)"
  },
  {
   "id": "e_mindestlohn_mpl_u",
   "von": "mindestlohn",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "+",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "mechanismus": "Mindestlohn ueber dem Grenzprodukt der Arbeit (MPL) => Unternehmen stellen weniger ein als angeboten wird => strukturelle (Mindestlohn-)Arbeitslosigkeit, v.a. bei Geringqualifizierten"
  },
  {
   "id": "e_reallohn_ld",
   "von": "reallohn",
   "nach": "arbeitsnachfrage",
   "vorzeichen": "-",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "mechanismus": "Reallohn steigt => Arbeitsnachfrage L^d sinkt (fallende Arbeitsnachfragekurve, aus Gewinnmaximierung w=MPL abgeleitet, Folie 32/34)"
  },
  {
   "id": "e_reallohn_ls",
   "von": "reallohn",
   "nach": "arbeitsangebot",
   "vorzeichen": "+",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "mechanismus": "Reallohn steigt => Arbeitsangebot L^s steigt (steigende Arbeitsangebotskurve, Folie 32)"
  },
  {
   "id": "e_gewerkschaftslohn_u",
   "von": "gewerkschaftslohn",
   "nach": "arbeitslosigkeit",
   "vorzeichen": "+",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "mechanismus": "Gewerkschaften/Insider setzen Lohn ueber GG-Niveau durch => Arbeitsangebot > Arbeitsnachfrage => strukturelle Arbeitslosigkeit, Kosten tragen v.a. Outsider"
  },
  {
   "id": "e_IM_NXmf",
   "von": "importe",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "Importbeschraenkung: IM sinken => NX steigen initial (IS* nach rechts)"
  },
  {
   "id": "e_NX_e_mf",
   "von": "nettoexporte",
   "nach": "nominaler_wechselkurs",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "hoehere NX => Nachfrage nach inl. Waehrung => e steigt (bzw. Aufwertungsdruck)"
  },
  {
   "id": "e_theta_r",
   "von": "risikoaufschlag",
   "nach": "realzins",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "theta steigt => r = r*+theta steigt"
  },
  {
   "id": "e_r_e",
   "von": "realzins",
   "nach": "nominaler_wechselkurs",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "hoeheres Laenderrisiko/r => Waehrung unattraktiv => e sinkt stark"
  },
  {
   "id": "e_MP_eps",
   "von": "reales_geldangebot",
   "nach": "realer_wechselkurs",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "M/P sinkt => LM* nach links => realer Wechselkurs steigt"
  },
  {
   "id": "e_eps_NXmf",
   "von": "realer_wechselkurs",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "mundell_fleming",
   "mechanismus": "hoeherer realer Wechselkurs => NX sinken"
  },
  {
   "id": "e_NX_epress",
   "von": "nettoexporte",
   "nach": "wechselkursdruck",
   "vorzeichen": "+",
   "modell": "mundell_fleming",
   "mechanismus": "hoehere NX => Aufwertungsdruck (e bleibt fix)"
  },
  {
   "id": "e_P_konsum",
   "von": "preisniveau",
   "nach": "konsum",
   "vorzeichen": "+",
   "modell": "deflationsspirale",
   "mechanismus": "fallende Preise => Konsum wird in Erwartung weiterer Rueckgaenge vertagt => Konsum sinkt"
  },
  {
   "id": "e_g_E",
   "von": "techn_fortschritt",
   "nach": "arbeitseffizienz",
   "vorzeichen": "+",
   "modell": "solow_technologie",
   "mechanismus": "g ist die Wachstumsrate der Arbeitseffizienz => hoeheres g => E waechst schneller"
  },
  {
   "id": "e_E_y",
   "von": "arbeitseffizienz",
   "nach": "output_pro_kopf",
   "vorzeichen": "+",
   "modell": "solow_technologie",
   "mechanismus": "Output pro Kopf Y/L = y-tilde · E ; y-tilde (pro effektiver Arbeit) im Steady State konstant => steigendes E => Y/L waechst dauerhaft"
  },
  {
   "id": "e_G_S_gross",
   "von": "staatsausgaben",
   "nach": "ersparnis",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "G steigt (oder T sinkt) => nationale Ersparnis S sinkt (Kreditangebot sinkt)"
  },
  {
   "id": "e_S_r_gross",
   "von": "ersparnis",
   "nach": "realzins",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "S sinkt => Kreditangebot sinkt => r steigt, um Kreditmarkt (S=I(r)+NKE(r)) zu raeumen. ACHTUNG: r ist hier ENDOGEN, nicht exogen wie bei r=r* in der kleinen offenen VW."
  },
  {
   "id": "e_r_I_gross",
   "von": "realzins",
   "nach": "investition",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "r steigt => Investitionen I(r) sinken (Teil des Crowding-out wie in geschlossener VW)"
  },
  {
   "id": "e_r_NKE_gross",
   "von": "realzins",
   "nach": "nettokapitalexport",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "r steigt => inlaendische Anlagen im Ausland unattraktiver, auslaendische Anlagen im Inland attraktiver => NKE(r) sinkt (Teil des Crowding-out wie in kleiner offener VW)"
  },
  {
   "id": "e_NKE_eps_gross",
   "von": "nettokapitalexport",
   "nach": "realer_wechselkurs",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "NKE sinkt => weniger Euro-Angebot am Devisenmarkt => realer Wechselkurs epsilon steigt"
  },
  {
   "id": "e_eps_NX_gross",
   "von": "realer_wechselkurs",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "epsilon steigt => inlaendische Gueter teurer => NX sinkt"
  },
  {
   "id": "e_Idem_r_gross",
   "von": "investition",
   "nach": "realzins",
   "vorzeichen": "+",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "Investitionsnachfrage steigt (Kurvenverschiebung, z.B. Investitionszulage) => Kreditnachfrage steigt => r steigt"
  },
  {
   "id": "e_IM_NX_gross",
   "von": "importe",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "Importbeschraenkung: IM sinkt => NX steigt initial (NX-Kurve verschiebt sich nach rechts, bei jedem epsilon mehr NX)"
  },
  {
   "id": "e_NX_eps_gross",
   "von": "nettoexporte",
   "nach": "realer_wechselkurs",
   "vorzeichen": "+",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "hoehere Nachfrage nach inl. Guetern (NX-Kurve verschoben) => hoehere Euro-Nachfrage => epsilon steigt. Kreditmarkt/r unveraendert (S, I+NKE nicht betroffen)"
  },
  {
   "id": "e_eps_EX_gross",
   "von": "realer_wechselkurs",
   "nach": "exporte",
   "vorzeichen": "-",
   "modell": "offene_vw_gross_lang",
   "mechanismus": "epsilon steigt => inl. Gueter teurer => Exporte sinken (hebt den anfaenglichen NX-Anstieg wieder auf, NX netto unveraendert)"
  },
  {
   "id": "e_G_Y_grossmf",
   "von": "staatsausgaben",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "mundell_fleming_gross",
   "mechanismus": "G steigt => IS-Kurve (mit NKE(r)-Term) verschiebt sich nach rechts => Y und r steigen simultan (wie geschlossene IS-LM)"
  },
  {
   "id": "e_Y_r_grossmf",
   "von": "output",
   "nach": "realzins",
   "vorzeichen": "+",
   "modell": "mundell_fleming_gross",
   "mechanismus": "Y steigt => Geldnachfrage steigt => bei fixem M/P steigt r (Bewegung entlang LM, wie geschlossene VW)"
  },
  {
   "id": "e_r_NKE_grossmf",
   "von": "realzins",
   "nach": "nettokapitalexport",
   "vorzeichen": "-",
   "modell": "mundell_fleming_gross",
   "mechanismus": "r steigt => NKE(r) sinkt (inlaendische Anlagen attraktiver fuer Auslaender, weniger Kapitalexport)"
  },
  {
   "id": "e_NKE_e_grossmf",
   "von": "nettokapitalexport",
   "nach": "nominaler_wechselkurs",
   "vorzeichen": "-",
   "modell": "mundell_fleming_gross",
   "mechanismus": "NKE sinkt => weniger Euro-Angebot am Devisenmarkt => Wechselkurs e steigt (Aufwertung)"
  },
  {
   "id": "e_e_NX_grossmf",
   "von": "nominaler_wechselkurs",
   "nach": "nettoexporte",
   "vorzeichen": "-",
   "modell": "mundell_fleming_gross",
   "mechanismus": "e steigt => inl. Gueter teurer => NX sinkt (daempft den Y-Anstieg zusaetzlich zum Crowding-out ueber r)"
  },
  {
   "id": "e_NX_Y_grossmf",
   "von": "nettoexporte",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "mundell_fleming_gross",
   "mechanismus": "NX sinkt => Y sinkt (zweiter Daempfungskanal neben I(r))"
  },
  {
   "id": "e_M_r_grossmf",
   "von": "geldmenge",
   "nach": "realzins",
   "vorzeichen": "-",
   "modell": "mundell_fleming_gross",
   "mechanismus": "M steigt => LM nach rechts => bei gegebenem Y sinkt r (wie geschlossene VW)"
  },
  {
   "id": "e_M_Y_grossmf",
   "von": "geldmenge",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "mundell_fleming_gross",
   "mechanismus": "LM nach rechts => Y steigt (direkter LM-Kanal, wie geschlossene VW)"
  },
  {
   "id": "e_k_wachstumsrate",
   "von": "kapital_pro_kopf",
   "nach": "wachstumsrate_prokopf",
   "vorzeichen": "-",
   "modell": "solow",
   "mechanismus": "je niedriger k relativ zu k* (also je hoeher MPK durch abnehmende Grenzertraege), desto groesser die Luecke s*f(k)-delta*k => desto hoeher die Wachstumsrate von k (und y); bei k=k* ist die Wachstumsrate 0"
  },
  {
   "id": "e_u_opferverhaeltnis",
   "von": "arbeitslosigkeit",
   "nach": "opferverhaeltnis",
   "vorzeichen": "+",
   "modell": "phillips_kurve",
   "mechanismus": "u steigt ueber u^n (durch kontraktive Geldpolitik/Disinflation) => entgangenes BIP (gemessen ueber Okunsches Gesetz, ca. 1%u <-> 2% BIP) wird als Opferverhaeltnis (BIP-Verlust je Prozentpunkt Disinflation) verbucht"
  },
  {
   "id": "e_dad_r_Y",
   "von": "realzins",
   "nach": "output",
   "vorzeichen": "-",
   "modell": "dad_das",
   "mechanismus": "Güternachfrage: höherer Realzins dämpft Investition/Konsum → Y sinkt"
  },
  {
   "id": "e_dad_Ybar_Y",
   "von": "natuerliches_niveau",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Höheres natürliches Niveau hebt die Baseline-Nachfrage (Anker der Güternachfrage)"
  },
  {
   "id": "e_dad_eps_Y",
   "von": "nachfrageschock",
   "nach": "output",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Nachfrageschock erhöht Output direkt (additiv in Güternachfrage)"
  },
  {
   "id": "e_dad_i_r",
   "von": "nominalzins",
   "nach": "realzins",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Fisher r=i−π^e: höherer Nominalzins → höherer Realzins"
  },
  {
   "id": "e_dad_pie_r",
   "von": "inflation_erwartet",
   "nach": "realzins",
   "vorzeichen": "-",
   "modell": "dad_das",
   "mechanismus": "Fisher: höhere erwartete Inflation senkt Realzins bei gegebenem i"
  },
  {
   "id": "e_dad_pie_pi",
   "von": "inflation_erwartet",
   "nach": "inflation",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Phillips/DAS: erwartete Inflation schlägt 1:1 auf aktuelle Inflation durch"
  },
  {
   "id": "e_dad_Y_pi",
   "von": "output",
   "nach": "inflation",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Positive Outputlücke (Y>Ȳ) erzeugt Preisdruck (Phillips-Term φ(Y−Ȳ))"
  },
  {
   "id": "e_dad_Ybar_pi",
   "von": "natuerliches_niveau",
   "nach": "inflation",
   "vorzeichen": "-",
   "modell": "dad_das",
   "mechanismus": "Höheres natürliches Niveau verkleinert die Outputlücke → dämpft Inflation"
  },
  {
   "id": "e_dad_nu_pi",
   "von": "angebotsschock",
   "nach": "inflation",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Angebotsschock ν erhöht Inflation direkt (Phillips)"
  },
  {
   "id": "e_dad_pi_pie",
   "von": "inflation",
   "nach": "inflation_erwartet",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Adaptive Erwartungen: aktuelle Inflation wird zur Erwartung nächster Periode"
  },
  {
   "id": "e_dad_pi_i",
   "von": "inflation",
   "nach": "nominalzins",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Taylor-Regel: Nominalzins folgt Inflation, Gesamtkoeffizient 1+θπ>1 (Taylor-Prinzip)"
  },
  {
   "id": "e_dad_pistar_i",
   "von": "inflationsziel",
   "nach": "nominalzins",
   "vorzeichen": "-",
   "modell": "dad_das",
   "mechanismus": "Taylor-Regel: höheres Inflationsziel senkt geforderten Zins (Term −θπ·π*)"
  },
  {
   "id": "e_dad_Y_i",
   "von": "output",
   "nach": "nominalzins",
   "vorzeichen": "+",
   "modell": "dad_das",
   "mechanismus": "Taylor-Regel: Überauslastung (Y>Ȳ) → ZB hebt Zins (θY)"
  },
  {
   "id": "e_dad_Ybar_i",
   "von": "natuerliches_niveau",
   "nach": "nominalzins",
   "vorzeichen": "-",
   "modell": "dad_das",
   "mechanismus": "Taylor-Regel: höheres natürliches Niveau senkt Outputlücke → niedrigerer Zins"
  }
 ],
 "ketten": [
  {
   "id": "k_geldpolitik_expansiv",
   "label": "Expansive Geldpolitik (IS-LM)",
   "modell": "is_lm",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_M_MP",
    "e_MP_r",
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "(+)(-)(-)(+) = +"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "In Quelle (Deck 07/06) ohne Daempfer gezeigt. Ausbau 'erweitern fuer Rueckkopplung': Y->geldnachfrage->r daempft den Zinsfall (Kanten e_Y_L, e_L_r)."
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 3 (Herleitung 06 Ketten 4-6)",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_fiskalpolitik_crowding_out",
   "label": "Expansive Fiskalpolitik mit Crowding-out (IS-LM)",
   "modell": "is_lm",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "raute",
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Crowding-out"
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 1",
   "schritte": [
    "e_G_Y",
    "e_Y_r",
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+ (gedaempft)",
    "notiz": "Direkter Schub (G->Y) und Crowding-out (r->I->Y) laufen in EINER Kette; beide Y-Wirkungen summieren sich zum Netto-Y. Netto < voller Multiplikator; Lage haengt von der LM-Steigung ab (Liquiditaetsfalle .. klassischer Fall)."
   },
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_fiskal_steuersenkung",
   "label": "Expansive Fiskalpolitik: Steuersenkung (IS-LM)",
   "modell": "is_lm",
   "ausloeser": {
    "groesse": "steuern",
    "richtung": "sinkt"
   },
   "typ": "raute",
   "schritte": [
    "e_T_Y",
    "e_Y_r",
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+ (gedaempft)",
    "notiz": "Wie bei G, aber Impuls kleiner (Teil 1-MPC wird gespart). Crowding-out daempft ueber r."
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Crowding-out"
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ad_herleitung",
   "label": "Herleitung der AD-Kurve (P steigt)",
   "modell": "ad_as",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_MP",
    "e_MP_r",
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "(-)(-)(-)(+) = - : hoeheres P => niedrigeres Y (fallende AD-Kurve)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Verbindet IS-LM mit AD-AS: durch Variation von P entsteht die AD-Kurve."
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_anpassung_lange_frist",
   "label": "Anpassung an lange Frist nach Nachfrageschock",
   "modell": "ad_as",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_MP",
    "e_MP_r",
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Y<Ybar => P sinkt mit der Zeit => M/P↑ => r↓ => Y↑ zurueck zu Ybar"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Trigger: Output unter natuerlichem Niveau. SRAS/Preisanpassung fuehrt zurueck zu Ybar bei tieferem P."
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 5",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_pigou_effekt",
   "label": "Stabilisierende Deflation (Pigou-Effekt)",
   "modell": "is_lm",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_MP",
    "e_MP_vermoegen",
    "e_vermoegen_C",
    "e_C_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "P↓ => M/P↑ => reales Vermoegen↑ => C↑ => Y↑ (stabilisierend)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Geldhypothese: Deflation wirkt einer Krise entgegen."
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 6",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_erwartete_deflation",
   "label": "Destabilisierende erwartete Deflation",
   "modell": "is_lm",
   "ausloeser": {
    "groesse": "inflation_erwartet",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_pie_r",
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "pi^e↓ => Realzins↑ => I↓ => Y↓ (destabilisierend)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Erweitertes IS-LM mit r = i - pi^e."
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 7",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_schuldendeflation",
   "label": "Destabilisierende unerwartete Deflation (Schuldendeflation)",
   "modell": "is_lm",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_schuld",
    "e_schuld_ausgaben",
    "e_ausgaben_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "P↓ unerwartet => reale Schuldenlast↑ => Ausgaben↓ => Y↓ (Fisher)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Schuldendeflations-Theorie."
   },
   "status": "online",
   "quelle": "07_Konjunktur2 Kette 8",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_fiskal_flexibel",
   "label": "Fiskalpolitik bei flexiblen Wechselkursen (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "raute",
   "schritte": [
    "e_Gmf_Y",
    "e_Ymf_e",
    "e_e_NX",
    "e_NX_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "unveraendert",
    "vorzeichen": "0",
    "notiz": "Δe>0, ΔY=0. Der fiskalische Impuls wird durch die Verdraengung der Nettoexporte (via Aufwertung) exakt aufgehoben."
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "vollstaendiges Crowding-out der Nettoexporte"
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_geld_flexibel",
   "label": "Geldpolitik bei flexiblen Wechselkursen (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_M_e",
    "e_e_NX",
    "e_NX_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "M↑ => e↓ => NX↑ => Y↑  (Δe<0, ΔY>0)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Wirkt ueber Auslandsverluste (beggar-the-neighbour)."
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_fiskal_fest",
   "label": "Fiskalpolitik bei festen Wechselkursen (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Gmf_epress",
    "e_epress_M",
    "e_M_Ymf"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Δe=0, ΔY>0: ZB akkommodiert die Aufwertungstendenz => kein Crowding-out"
   },
   "rueckkopplung": {
    "typ": "verstaerkend",
    "name": "ZB weitet Geldmenge aus"
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_geld_fest",
   "label": "Geldpolitik bei festen Wechselkursen (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Mtry_epress",
    "e_epress_Mback"
   ],
   "netto": {
    "groesse": "geldmenge",
    "richtung": "unveraendert",
    "vorzeichen": "0",
    "check": "Δe=0, ΔY=0: ZB muss intervenieren, gibt die Geldmengensteuerung zwangslaeufig auf"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Interventionspflicht hebt Impuls auf"
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 5",
   "verifikation": {
    "folien": "NEIN",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_quantitaet_M_P",
   "label": "Quantitaetstheorie: Geldmengenerhoehung",
   "modell": "geldmarkt_quantitaet",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_M_P"
   ],
   "netto": {
    "groesse": "preisniveau",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "M↑ => P↑ 1:1 (V,Y gegeben)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Klassische Dichotomie, Geld neutral."
   },
   "status": "online",
   "quelle": "05_Geld_Inflation Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_inflationserwartung_P",
   "label": "Erhoehung der Inflationserwartungen",
   "modell": "geldmarkt_quantitaet",
   "ausloeser": {
    "groesse": "inflation_erwartet",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_pie_i",
    "e_i_L",
    "e_L_P"
   ],
   "netto": {
    "groesse": "preisniveau",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "pi^e↑ => i↑ => Geldnachfrage↓ => P↑"
   },
   "rueckkopplung": {
    "typ": "verstaerkend",
    "name": "P↑ => pi^e↑ weiter"
   },
   "status": "online",
   "quelle": "05_Geld_Inflation Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_deflationsspirale",
   "label": "Deflationsspirale",
   "modell": "deflationsspirale",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_konsum",
    "e_C_E",
    "e_ausgaben_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "Preise↓ => Konsum vertagt => Ausgaben↓ => Y↓ (Teufelskreis)"
   },
   "rueckkopplung": {
    "typ": "verstaerkend",
    "name": "sich selbst verstaerkender Teufelskreis"
   },
   "status": "online",
   "quelle": "05_Geld_Inflation Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "NEIN"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_schuhsohlenkosten",
   "label": "Soziale Kosten der Inflation: Schuhsohlenkosten",
   "modell": "geldmarkt_quantitaet",
   "ausloeser": {
    "groesse": "inflation",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_pi_i",
    "e_i_geldhaltung",
    "e_geldhaltung_kosten"
   ],
   "netto": {
    "groesse": "transaktionskosten",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "pi↑ => i↑ => Geldhaltung↓ => Transaktionskosten↑"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Erwartete Inflationskosten."
   },
   "status": "online",
   "quelle": "05_Geld_Inflation Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_oelpreisschock",
   "label": "Negativer Angebotsschock (Oelpreisschock)",
   "modell": "ad_as",
   "ausloeser": {
    "groesse": "produktionskosten",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_kosten_P",
    "e_P_Y_ad"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "Kosten↑ => P↑ (SRAS↑) => Y↓  (Stagflation: P↑, Y↓)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Ohne weitere Schocks kehrt die VW mit der Zeit zu Ybar zurueck."
   },
   "status": "online",
   "quelle": "06_Konjunktur1 Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_multiplikator",
   "label": "Fiskalpolitik: Multiplikator (Keynes-Kreuz)",
   "modell": "keynes_kreuz",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_G_E",
    "e_E_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "G↑ => E↑ => Y↑  (Multiplikator 1/(1-MPC))"
   },
   "rueckkopplung": {
    "typ": "verstaerkend",
    "name": "Multiplikator: Y↑ => C↑ => E↑ => Y↑ (konvergent)"
   },
   "status": "online",
   "quelle": "06_Konjunktur1 Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_steuer_keynes",
   "label": "Fiskalpolitik: Steuererhoehung (Keynes-Kreuz)",
   "modell": "keynes_kreuz",
   "ausloeser": {
    "groesse": "steuern",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_T_C",
    "e_C_E",
    "e_E_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "T↑ => C↓ => E↓ => Y↓  (Steuermultiplikator -MPC/(1-MPC))"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Kleiner als Ausgabenmultiplikator (Teil aus Ersparnis)."
   },
   "status": "online",
   "quelle": "06_Konjunktur1 Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_is_herleitung",
   "label": "Herleitung der IS-Kurve (Zinssenkung)",
   "modell": "is_kurve",
   "ausloeser": {
    "groesse": "realzins",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_r_I",
    "e_I_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "r↓ => I↑ => Y↑  (negative Steigung der IS-Kurve)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Basis IS-Kurve aus Keynes-Kreuz + Investitionsfunktion."
   },
   "status": "online",
   "quelle": "06_Konjunktur1 Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_geldmarkt_r",
   "label": "Geldpolitik am Geldmarkt (M sinkt)",
   "modell": "liquiditaetspraeferenz",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_M_MP",
    "e_MP_r"
   ],
   "netto": {
    "groesse": "realzins",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "M↓ => M/P↓ => r↑  (Liquiditaetspraeferenz)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "P fix, Y im Teilschritt gegeben."
   },
   "status": "online",
   "quelle": "06_Konjunktur1 Kette 5",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_lm_herleitung",
   "label": "Herleitung der LM-Kurve (Einkommen steigt)",
   "modell": "lm_kurve",
   "ausloeser": {
    "groesse": "output",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Y_L",
    "e_L_r"
   ],
   "netto": {
    "groesse": "realzins",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Y↑ => Geldnachfrage↑ => r↑  (positive Steigung der LM-Kurve)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "M/P exogen."
   },
   "status": "online",
   "quelle": "06_Konjunktur1 Kette 6",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ovw_inl_fiskal",
   "label": "Inlaendische Fiskalpolitik (offene VW)",
   "modell": "offene_vw_finanzmarkt",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_G_S",
    "e_S_NKE",
    "e_NKE_eps",
    "e_eps_NX"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "G↑ => S↓ => (S-I)↓ => ε↑ => NX↓ (Leistungsbilanzdefizit)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "kleine offene VW, r=r*."
   },
   "status": "online",
   "quelle": "08_Offene_VW_I Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ovw_ausl_fiskal",
   "label": "Auslaendische Fiskalpolitik (offene VW)",
   "modell": "offene_vw_finanzmarkt",
   "ausloeser": {
    "groesse": "weltzins",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_rstern_I",
    "e_I_NKE",
    "e_NKE_NX"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "r*↑ => I↓ => (S-I)↑ => NX↑"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "S konstant."
   },
   "status": "online",
   "quelle": "08_Offene_VW_I Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ovw_investitionsanstieg",
   "label": "Anstieg der Investitionsnachfrage (offene VW)",
   "modell": "offene_vw_finanzmarkt",
   "ausloeser": {
    "groesse": "investition",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_I_NKE",
    "e_NKE_eps",
    "e_eps_NX"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "I↑ => (S-I)↓ => ε↑ => NX↓"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "S, r* konstant."
   },
   "status": "online",
   "quelle": "08_Offene_VW_I Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ovw_protektionismus",
   "label": "Protektionismus / Importbeschraenkung (offene VW)",
   "modell": "offene_vw_finanzmarkt",
   "ausloeser": {
    "groesse": "importe",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_IM_NX2",
    "e_NX_eps",
    "e_eps_EX"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "unveraendert",
    "vorzeichen": "0",
    "check": "IM↓ => NX↑ initial => ε↑ => EX↓ => NX bleibt unveraendert (ΔNX=0)"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Aufwertung hebt den anfaenglichen NX-Effekt auf"
   },
   "status": "online",
   "quelle": "08_Offene_VW_I Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ppp_inflation_wk",
   "label": "Inflation und nominaler Wechselkurs (PPP)",
   "modell": "ppp",
   "ausloeser": {
    "groesse": "inflation",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_pi_e"
   ],
   "netto": {
    "groesse": "nominaler_wechselkurs",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "hoehere relative Inflation => nominale Abwertung"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "realer Wechselkurs unveraendert."
   },
   "status": "online",
   "quelle": "08_Offene_VW_I Kette 5",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_as_preisstarrheit",
   "label": "Preisstarrheiten: steigende SRAS",
   "modell": "preisstarrheiten",
   "ausloeser": {
    "groesse": "output",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Y_P_sticky"
   ],
   "netto": {
    "groesse": "preisniveau",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Y↑ => P↑ (positive SRAS-Steigung)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Teil der Firmen hat starre Preise."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_as_prozyklischer_reallohn",
   "label": "Prozyklischer Reallohn (Preisstarrheit)",
   "modell": "preisstarrheiten",
   "ausloeser": {
    "groesse": "output",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Y_N",
    "e_N_reallohn"
   ],
   "netto": {
    "groesse": "reallohn",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "Y↓ => Arbeitsnachfrage↓ => Reallohn↓ (prozyklisch)"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "NEIN"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_as_geldwertillusion",
   "label": "Geldwertillusion (unvollk. Information)",
   "modell": "unvollk_information",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Pillusion_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "P↑ unerwartet => Anbieter weitet aus => Y↑ ueber Ybar"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Verwechslung von Inflation mit relativem Preisanstieg."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_as_antizyklischer_reallohn",
   "label": "Antizyklischer Reallohn (Lohnstarrheit)",
   "modell": "lohnstarrheiten",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_reallohn",
    "e_reallohn_N",
    "e_N_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "P↑ => W/P↓ => Beschaeftigung↑ => Y↑ (Reallohn antizyklisch)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Nominallohn vor P fixiert."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "NEIN"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_asad_anpassung",
   "label": "AS-AD Anpassung nach Nachfrageschock",
   "modell": "ad_as",
   "ausloeser": {
    "groesse": "output",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Y_Pe",
    "e_Pe_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "unveraendert",
    "vorzeichen": "0",
    "check": "kurzfristig Y↑ (>Ybar); langfristig P^e↑ => SRAS↑ => Y zurueck zu Ybar (P dauerhaft hoeher)"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Erwartungsanpassung eliminiert den Boom"
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 5",
   "verifikation": {
    "folien": "JA",
    "buch": "NEIN"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_nachfragesoginflation",
   "label": "Nachfragesoginflation (demand-pull)",
   "modell": "phillips_kurve",
   "ausloeser": {
    "groesse": "arbeitslosigkeit",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_u_pi"
   ],
   "netto": {
    "groesse": "inflation",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "u<u^n => Inflation↑"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 6",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_kostendruckinflation",
   "label": "Kostendruckinflation (cost-push)",
   "modell": "phillips_kurve",
   "ausloeser": {
    "groesse": "angebotsschock",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_v_pi"
   ],
   "netto": {
    "groesse": "inflation",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "v>0 => Inflation↑"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 7",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_disinflation_adaptiv",
   "label": "Disinflation unter adaptiven Erwartungen",
   "modell": "phillips_kurve",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_M_u",
    "e_u_pi"
   ],
   "netto": {
    "groesse": "inflation",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "kontraktive GP => u↑ => Inflation↓ (Opferverhaeltnis: BIP-Verlust)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Adaptive Erwartungen, Okunsches Gesetz."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 8",
   "verifikation": {
    "folien": "JA",
    "buch": "NEIN"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_disinflation_rational",
   "label": "Schmerzlose Disinflation (rationale Erwartungen)",
   "modell": "phillips_kurve",
   "ausloeser": {
    "groesse": "inflation_erwartet",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_pie_pi"
   ],
   "netto": {
    "groesse": "inflation",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "glaubhafte Ankuendigung => pi^e↓ sofort => Inflation↓ ohne Anstieg von u"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Setzt Glaubwuerdigkeit voraus."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 9",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_hysterese",
   "label": "Hysterese (dauerhafte Schaeden)",
   "modell": "hysterese",
   "ausloeser": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_u_dequal"
   ],
   "netto": {
    "groesse": "natuerliche_rate",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "zyklische Arbeitslosigkeit => Dequalifikation => u^n↑ dauerhaft"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Kette 10",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_solow_akkumulation",
   "label": "Kapitalakkumulation zum Steady State",
   "modell": "solow",
   "ausloeser": {
    "groesse": "invest_prokopf",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_i_k",
    "e_k_y"
   ],
   "netto": {
    "groesse": "output_pro_kopf",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "i>δk => k↑ => y↑ (bis Steady State)"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "sinkendes MPK: Abschreibungen holen Investitionen ein"
   },
   "status": "online",
   "quelle": "02_Wachstum1 Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_solow_sparquote",
   "label": "Erhoehung der Sparquote (Solow)",
   "modell": "solow",
   "ausloeser": {
    "groesse": "sparquote",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_s_i",
    "e_i_k",
    "e_k_y"
   ],
   "netto": {
    "groesse": "output_pro_kopf",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "s↑ => i↑ => k↑ => y↑ (hoeheres Steady State)"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Konsum kurzfristig niedriger"
   },
   "status": "online",
   "quelle": "02_Wachstum1 Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_solow_golden_ueber",
   "label": "Goldene Regel: Ueberakkumulation (s senken)",
   "modell": "solow",
   "ausloeser": {
    "groesse": "sparquote",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_s_i",
    "e_i_k",
    "e_k_y"
   ],
   "netto": {
    "groesse": "output_pro_kopf",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "s↓ => i↓ => k↓ => y↓; aber Konsum c dauerhaft hoeher (k*>k**)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Start bei zu hohem Kapitalstock."
   },
   "status": "online",
   "quelle": "02_Wachstum1 Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_solow_bevoelkerung",
   "label": "Erhoehung des Bevoelkerungswachstums",
   "modell": "solow_bevoelkerung",
   "ausloeser": {
    "groesse": "bevoelkerungswachstum",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_n_k",
    "e_k_y"
   ],
   "netto": {
    "groesse": "output_pro_kopf",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "n↑ => Break-even↑ => k pro Kopf↓ => y↓"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "02_Wachstum1 Kette 5",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_ak_modell",
   "label": "Dauerhaftes Wachstum ohne techn. Fortschritt (AK)",
   "modell": "ak_modell",
   "ausloeser": {
    "groesse": "kapital",
    "richtung": "waechst-dauerhaft",
    "notiz": "kein Schock; Folge der Bedingung s*A>delta"
   },
   "typ": "einfach",
   "schritte": [
    "e_sA_K",
    "e_K_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "s*A>δ => K waechst dauerhaft => Y waechst permanent"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Besonderheit: KEIN sinkendes MPK, kein Daempfer."
   },
   "status": "online",
   "quelle": "03_Wachstum2 Kette 2",
   "verifikation": {
    "folien": "NEIN",
    "buch": "NEIN"
   },
   "darstellung": "bedingung",
   "bedingung": "s*A > delta",
   "hinweis_darstellung": "Kein Steady State (endloses Wachstum) => keine Schock-Kette. Gehoert in die Bedingungs-/Steady-State-Ansicht der Wachstumsfamilie."
  },
  {
   "id": "k_forschungsquote",
   "label": "Anstieg der Forschungsquote (2-Sektoren)",
   "modell": "endogen_2sektoren",
   "ausloeser": {
    "groesse": "forschungsquote",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_uF_g",
    "e_g_y"
   ],
   "netto": {
    "groesse": "output_pro_kopf",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "u↑ => g(u)↑ => dauerhaft hoehere Pro-Kopf-Wachstumsrate (kurzfristig Output-Kosten)"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "kurzfristig weniger Gueterproduktion"
   },
   "status": "online",
   "quelle": "03_Wachstum2 Kette 1",
   "verifikation": {
    "folien": "NEIN",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_sektoraler_wandel",
   "label": "Sektoraler Wandel => friktionelle Arbeitslosigkeit",
   "modell": "natuerliche_arbeitslosenquote",
   "ausloeser": {
    "groesse": "sektoraler_wandel",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_wandel_u"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Nachfrageverschiebung => Suchzeit => friktionelle Arbeitslosigkeit"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Kette 1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_arbeitslosenversicherung",
   "label": "Ausweitung der Arbeitslosenversicherung",
   "modell": "natuerliche_arbeitslosenquote",
   "ausloeser": {
    "groesse": "arbeitslosenversicherung",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_av_f",
    "e_f_u"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "AV => f↓ => Dauer↑ => u↑"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Ggf. besseres Matching (Gegeneffekt)."
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Kette 2",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_lohnrigiditaet",
   "label": "Lohnrigiditaet => strukturelle Arbeitslosigkeit",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "ausloeser": {
    "groesse": "reallohn",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_reallohn_al"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Reallohn ueber GG => Ls>Ld => strukturelle Arbeitslosigkeit"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Mindestlohn, Gewerkschaften."
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_effizienzloehne",
   "label": "Effizienzloehne => strukturelle Arbeitslosigkeit",
   "modell": "effizienzloehne",
   "ausloeser": {
    "groesse": "reallohn",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_reallohn_al"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Lohn ueber GG (>MPL) => unfreiwillige Arbeitslosigkeit; Produktivitaetsvorteil rechtfertigt Mehrkosten fuer die Firma"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Kette 4",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_separationsrate",
   "label": "Separationsrate steigt => natuerliche Arbeitslosenquote steigt",
   "modell": "natuerliche_arbeitslosenquote",
   "ausloeser": {
    "groesse": "separationsrate",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_separationsrate_u"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "u=s/(s+f): s steigt bei gegebenem f => u steigt"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Politik zur Senkung der natuerlichen Quote muss s senken oder f erhoehen (Folie 15)."
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Folie 12-16; Mankiw Kap.7.1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_jobfindung",
   "label": "Jobfindungsrate steigt => natuerliche Arbeitslosenquote sinkt",
   "modell": "natuerliche_arbeitslosenquote",
   "ausloeser": {
    "groesse": "jobfindungsrate",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_f_u"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "u=s/(s+f): f steigt bei gegebenem s => u sinkt"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Nutzt dieselbe Kante wie k_arbeitslosenversicherung (e_f_u), hier mit umgekehrtem Ausloeser (f steigt statt sinkt). Politikbeispiel: bessere Arbeitsvermittlung/Matching senkt die natuerliche Quote."
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Folie 15; Mankiw Kap.7.1",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mindestlohn",
   "label": "Mindestlohn ueber MPL => strukturelle Arbeitslosigkeit",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "ausloeser": {
    "groesse": "mindestlohn",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_mindestlohn_mpl_u"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Mindestlohn > MPL => Arbeitsangebot > Arbeitsnachfrage => Mindestlohn-Arbeitslosigkeit, v.a. bei geringqualifizierten/jungen Arbeitnehmern"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Fuer die meisten Beschaeftigten nicht bindend, da Lohn > Mindestlohn. Empirie umstritten (Card/Krueger vs. Neumark/Wascher); Deutschland 2015: Minijob-Bestand sank sichtbar nach Einfuehrung (Folie 35, Groll 2016)."
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Folie 33-35; Mankiw Kap.7.3 Mindestlohngesetzgebung",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_gewerkschaften",
   "label": "Gewerkschaftslohn (Insider-Outsider) => strukturelle Arbeitslosigkeit",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "ausloeser": {
    "groesse": "gewerkschaftslohn",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_gewerkschaftslohn_u"
   ],
   "netto": {
    "groesse": "arbeitslosigkeit",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Gewerkschaften/Insider setzen Lohn ueber GG durch => Arbeitsangebot > Arbeitsnachfrage => strukturelle Arbeitslosigkeit"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Insider (bereits Beschaeftigte) tragen den Nutzen, Outsider (Arbeitssuchende) tragen die Kosten (schlechtere Jobaussichten). Deutschland 2026: Branchentarifloehne teils deutlich ueber gesetzlichem Mindestlohn (Folie 37)."
   },
   "status": "online",
   "quelle": "04_Arbeitslosigkeit Folie 36-37; Mankiw Kap.7.3 Gewerkschaften und Tarifverhandlungen",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_handel_flexibel",
   "label": "Handelspolitik bei flexiblen Wechselkursen (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "importe",
    "richtung": "sinkt"
   },
   "typ": "raute",
   "schritte": [
    "e_IM_NXmf",
    "e_NX_e_mf",
    "e_e_NX"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "unveraendert",
    "vorzeichen": "0",
    "notiz": "IM↓ => NX↑ initial => e↑ => NX↓; Netto ΔNX=0, ΔY=0. Aufwertung hebt den Effekt exakt auf."
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Aufwertung neutralisiert die Importbeschraenkung"
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 3",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_handel_fest",
   "label": "Handelspolitik bei festen Wechselkursen (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "importe",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_IM_NXmf",
    "e_NX_epress",
    "e_epress_M",
    "e_M_Ymf"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "IM↓ => NX↑ => Aufwertungsdruck => ZB M↑ => Y↑ (Δe=0, ΔY>0)"
   },
   "rueckkopplung": {
    "typ": "verstaerkend",
    "name": "ZB akkommodiert"
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 6",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_risikoaufschlag",
   "label": "Erhoehung des Risikoaufschlags theta (M-F)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "risikoaufschlag",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_theta_r",
    "e_r_e",
    "e_e_NX",
    "e_NX_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "theta↑ => r↑ => e↓ stark => NX↑ => Y↑ (Δe<0, ΔY>0)"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "I↓ (via r↑) + 3 LM-Effekte daempfen: Output steigt real nicht so stark"
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 7",
   "verifikation": {
    "folien": "NEIN",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_ad_herleitung",
   "label": "Herleitung der AD-Kurve (offene VW, P steigt)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_MP",
    "e_MP_eps",
    "e_eps_NXmf",
    "e_NX_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "P↑ => M/P↓ => ε↑ => NX↓ => Y↓ (fallende AD-Kurve)"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 8",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_mf_lr_anpassung",
   "label": "Anpassung kurze zu lange Frist (offene VW)",
   "modell": "mundell_fleming",
   "ausloeser": {
    "groesse": "preisniveau",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_P_MP",
    "e_MP_eps",
    "e_eps_NXmf",
    "e_NX_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "Y<Ybar => P↓ => M/P↑ => ε↓ => NX↑ => Y↑ zurueck zu Ybar"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Stabilisierung bei flexiblen Preisen."
   },
   "status": "online",
   "quelle": "09_Offene_VW_II Kette 9",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_solow_technologie",
   "label": "Technischer Fortschritt (Solow-Erweiterung)",
   "modell": "solow_technologie",
   "ausloeser": {
    "groesse": "techn_fortschritt",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_g_E",
    "e_E_y"
   ],
   "netto": {
    "groesse": "output_pro_kopf",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "g↑ => E waechst => Output pro Kopf Y/L waechst dauerhaft (einzige Quelle dauerhaften Pro-Kopf-Wachstums; im Basis-Solow waechst y langfristig NICHT)"
   },
   "rueckkopplung": {
    "typ": null
   },
   "status": "online",
   "quelle": "Mankiw Kap.9 (Solow mit techn. Fortschritt)",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_gross_lang_inl_fiskal",
   "label": "Inlaendische Fiskalpolitik (grosse offene VW, lange Frist)",
   "modell": "offene_vw_gross_lang",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "raute",
   "schritte": [
    "e_G_S_gross",
    "e_S_r_gross",
    "e_r_I_gross",
    "e_r_NKE_gross",
    "e_NKE_eps_gross",
    "e_eps_NX_gross"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "notiz": "G steigt => S sinkt => r steigt (Kreditmarkt-GG) => sowohl I sinkt (Crowding-out wie geschlossene VW) ALS AUCH NKE sinkt => epsilon steigt => NX sinkt (wie kleine offene VW). Beide Kanaele gedaempft ggue. den Extremfaellen: I sinkt weniger als in geschlossener VW (weil ein Teil ueber NKE/NX abgefedert wird), NX sinkt weniger als in kleiner offener VW (weil r nicht komplett fix ist, ein Teil des Impulses geht in hoeheren Zins statt in NX-Rueckgang)."
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Mischform aus Crowding-out (r->I) und NX-Verdraengung (r->NKE->epsilon->NX)"
   },
   "status": "online",
   "quelle": "Kap06-Anhang (Abb. 6-20)",
   "verifikation": {
    "folien": "NEIN",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_gross_lang_investitionsanstieg",
   "label": "Anstieg der Investitionsnachfrage (grosse offene VW, lange Frist)",
   "modell": "offene_vw_gross_lang",
   "ausloeser": {
    "groesse": "investition",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_Idem_r_gross",
    "e_r_NKE_gross",
    "e_NKE_eps_gross",
    "e_eps_NX_gross"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "I-Nachfrage steigt (Kurvenverschiebung) => Kreditnachfrage steigt => r steigt => NKE sinkt => epsilon steigt => NX sinkt"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "S exogen konstant, nur Kreditnachfrageseite verschiebt sich."
   },
   "status": "online",
   "quelle": "Kap06-Anhang (Abb. 6-21)",
   "verifikation": {
    "folien": "NEIN",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_gross_lang_protektionismus",
   "label": "Handelsbeschraenkung / Protektionismus (grosse offene VW, lange Frist)",
   "modell": "offene_vw_gross_lang",
   "ausloeser": {
    "groesse": "importe",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_IM_NX_gross",
    "e_NX_eps_gross",
    "e_eps_EX_gross"
   ],
   "netto": {
    "groesse": "nettoexporte",
    "richtung": "unveraendert",
    "vorzeichen": "0",
    "check": "IM sinkt => NX-Kurve verschiebt sich nach rechts (mehr NX bei jedem epsilon) => epsilon steigt (mehr Euro-Nachfrage) => Exporte sinken => NX netto UNVERAENDERT. Kreditmarkt/r bleiben unberuehrt (anders als bei Fiskal-/Investitionsschocks)."
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "Aufwertung hebt den anfaenglichen NX-Effekt exakt auf, wie bei MF-klein"
   },
   "status": "online",
   "quelle": "Kap06-Anhang (Abb. 6-22)",
   "verifikation": {
    "folien": "NEIN",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_grossmf_fiskal",
   "label": "Expansive Fiskalpolitik (grosse offene VW, kurze Frist)",
   "modell": "mundell_fleming_gross",
   "ausloeser": {
    "groesse": "staatsausgaben",
    "richtung": "steigt"
   },
   "typ": "raute",
   "schritte": [
    "e_G_Y_grossmf",
    "e_Y_r_grossmf",
    "e_r_NKE_grossmf",
    "e_NKE_e_grossmf",
    "e_e_NX_grossmf",
    "e_NX_Y_grossmf"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+ (staerker gedaempft als geschlossen, schwaecher als MF-klein=0)",
    "notiz": "G steigt => IS nach rechts => Y und r steigen (wie geschlossene VW). r-Anstieg wirkt ZWEIFACH daempfend: (1) I sinkt (Crowding-out wie geschlossene VW), (2) NKE sinkt => e steigt => NX sinkt (Verdraengungs-Kanal wie MF-klein, dort aber vollstaendig). Netto: Y steigt, aber weniger als in geschlossener VW und mehr als in MF-klein (wo Delta Y=0). Faustregel: Ergebnis liegt zwischen den beiden Extremfaellen."
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "doppeltes Crowding-out: ueber r->I UND ueber r->NKE->e->NX"
   },
   "status": "online",
   "quelle": "Kap14-Anhang (Abb. 14-16)",
   "verifikation": {
    "folien": "JA (Folie 37, qualitativ)",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_grossmf_geld",
   "label": "Expansive Geldpolitik (grosse offene VW, kurze Frist)",
   "modell": "mundell_fleming_gross",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "steigt"
   },
   "typ": "raute",
   "schritte": [
    "e_M_r_grossmf",
    "e_M_Y_grossmf",
    "e_r_NKE_grossmf",
    "e_NKE_e_grossmf",
    "e_e_NX_grossmf",
    "e_NX_Y_grossmf"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "notiz": "M steigt => LM nach rechts => r sinkt UND Y steigt direkt (wie geschlossene VW). Zusaetzlich: r sinkt => NKE steigt => e sinkt (Abwertung) => NX steigt => Y steigt WEITER (Kanal wie MF-klein). Zwei Verstaerkungskanaele gleichzeitig (I hoch UND NX hoch) -> Geldpolitik ist in der grossen offenen VW staerker als in der rein geschlossenen VW."
   },
   "rueckkopplung": {
    "typ": "verstaerkend",
    "name": "doppelter Transmissionskanal: r->I (geschlossen) UND r->NKE->e->NX (klein offen)"
   },
   "status": "online",
   "quelle": "Kap14-Anhang (Abb. 14-17)",
   "verifikation": {
    "folien": "JA (Folie 37, qualitativ)",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_solow_konvergenz",
   "label": "Konvergenz: niedriges Anfangskapital waechst schneller",
   "modell": "solow",
   "ausloeser": {
    "groesse": "kapital_pro_kopf",
    "richtung": "ist-niedrig",
    "notiz": "kein Schock; Vergleich zweier Volkswirtschaften mit gleichem k* aber unterschiedlichem Start-k0"
   },
   "typ": "einfach",
   "schritte": [
    "e_k_wachstumsrate"
   ],
   "netto": {
    "groesse": "wachstumsrate_prokopf",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "k0 klein => Abstand zu k* gross => s*f(k0) >> delta*k0 => hohe Wachstumsrate; waechst k Richtung k*, sinkt die Wachstumsrate (abnehmendes MPK) => Konvergenz auf k*"
   },
   "rueckkopplung": {
    "typ": "daempfend",
    "name": "sinkendes MPK bremst die Wachstumsrate, je naeher k an k* kommt (Konvergenz endet am Steady State)"
   },
   "status": "online",
   "quelle": "03_Wachstum2_3 Folien 28-29; Mankiw Kap.10 Abschnitt Konvergenz",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_phillips_shift_erwartung",
   "label": "Verschiebung der Phillips-Kurve durch Inflationserwartungen",
   "modell": "phillips_kurve",
   "ausloeser": {
    "groesse": "inflation_erwartet",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_pie_pi"
   ],
   "netto": {
    "groesse": "inflation",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "pi^e steigt => bei jedem gegebenen u ist die Inflation hoeher => Phillips-Kurve verschiebt sich nach oben"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Kein Steady-State-Uebergang: reine Parallelverschiebung der Kurve im (u,pi)-Raum, kein Bewegen entlang der Kurve."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Folie 30",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_opferverhaeltnis",
   "label": "Opferverhaeltnis: Disinflation kostet Output",
   "modell": "phillips_kurve",
   "ausloeser": {
    "groesse": "geldmenge",
    "richtung": "sinkt",
    "notiz": "kontraktive Geldpolitik zur Disinflation (z.B. Zielsenkung von 6% auf 2%)"
   },
   "typ": "einfach",
   "schritte": [
    "e_M_u",
    "e_u_opferverhaeltnis"
   ],
   "netto": {
    "groesse": "opferverhaeltnis",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "kontraktive GP => u steigt ueber u^n => ueber Okunsches Gesetz entgangenes BIP; Zahlenbeispiel VL: Disinflation 6%->2% (4 Prozentpunkte) bei Opferverhaeltnis 5 => 20% BIP-Rueckgang (verteilbar auf 1-4 Jahre)"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Empirisch kleiner als von der Theorie vorhergesagt (Fallstudie USA 1981-85: SR=2,8 statt 5)."
   },
   "status": "online",
   "quelle": "10_Gesamtwirtschaftliches_Angebot Folien 31-32; Mankiw Kap.15 Abschnitt Opferverhaeltnis",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_dad_angebotsschock",
   "label": "Angebotsschock (Stagflation)",
   "modell": "dad_das",
   "ausloeser": {
    "groesse": "angebotsschock",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_dad_nu_pi",
    "e_dad_pi_i",
    "e_dad_i_r",
    "e_dad_r_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "-",
    "check": "(+)(+)(+)(-) = -"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Gleichzeitig π steigt (direkt via ν→π) → Stagflation. Mehrperiodig: erhöhte π hebt die Inflationserwartung (adaptiv) → DAS bleibt oben, langsame Rückkehr zu Y=Ȳ, π=π*."
   },
   "status": "online",
   "quelle": "Kap16 §16.3 + VL11 (cross-verifiziert)",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_dad_nachfrageschock",
   "label": "Nachfrageschock (Nachfrage-Boom)",
   "modell": "dad_das",
   "ausloeser": {
    "groesse": "nachfrageschock",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_dad_eps_Y",
    "e_dad_Y_pi"
   ],
   "netto": {
    "groesse": "inflation",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "(+)(+) = +"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Y und π steigen gleichgerichtet (Kontrast zum Angebotsschock). ZB dämpft über Y→i→r→Y. Nach Schockende Überschießen: Y kurz unter Ȳ, dann Rückkehr."
   },
   "status": "online",
   "quelle": "Kap16 §16.3 + VL11 (cross-verifiziert)",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_dad_disinflation",
   "label": "Disinflation (Inflationsziel gesenkt)",
   "modell": "dad_das",
   "ausloeser": {
    "groesse": "inflationsziel",
    "richtung": "sinkt"
   },
   "typ": "einfach",
   "schritte": [
    "e_dad_pistar_i",
    "e_dad_i_r",
    "e_dad_r_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "sinkt",
    "vorzeichen": "+",
    "check": "(-)(+)(-) = +"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Kurzfristig Rezession (Opferverhältnis/Sacrifice Ratio). Mehrperiodig sinkt die Inflationserwartung → DAS runter → Y erholt sich, π→neues Ziel. Paradox: i kurzfristig ↑ trotz Zinssenkungsabsicht."
   },
   "status": "online",
   "quelle": "Kap16 §16.3 + VL11 (cross-verifiziert)",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  },
  {
   "id": "k_dad_wachstum",
   "label": "Langfristiges Wachstum (Ȳ steigt)",
   "modell": "dad_das",
   "ausloeser": {
    "groesse": "natuerliches_niveau",
    "richtung": "steigt"
   },
   "typ": "einfach",
   "schritte": [
    "e_dad_Ybar_Y"
   ],
   "netto": {
    "groesse": "output",
    "richtung": "steigt",
    "vorzeichen": "+",
    "check": "(+) = +"
   },
   "rueckkopplung": {
    "typ": null,
    "notiz": "Ȳ↑ verschiebt DAS und DAD gleich weit nach rechts → Y↑ im vollen Ausmaß, π unverändert. Kein Trade-off (Wachstum mit stabiler Inflation)."
   },
   "status": "online",
   "quelle": "Kap16 §16.3 + VL11 (cross-verifiziert)",
   "verifikation": {
    "folien": "JA",
    "buch": "JA"
   },
   "darstellung": "schock-kette"
  }
 ],
 "symbol_kollisionen": [
  {
   "symbol": "L",
   "bedeutungen": [
    "geldnachfrage (L(i,Y))",
    "arbeit (Wachstum/Arbeitsmarkt)"
   ]
  },
  {
   "symbol": "E",
   "bedeutungen": [
    "geplante_ausgaben",
    "arbeitseffizienz (Wachstum)",
    "erwerbstaetige (Arbeitsmarkt)"
   ]
  },
  {
   "symbol": "s",
   "bedeutungen": [
    "sparquote (Solow)",
    "jobverlustrate (Arbeitsmarkt)",
    "anteil_starre_preise (AS)"
   ]
  },
  {
   "symbol": "f",
   "bedeutungen": [
    "produktionsfunktion f(k) (Solow)",
    "jobfindungsrate (Arbeitsmarkt)"
   ]
  },
  {
   "symbol": "k",
   "bedeutungen": [
    "kapital_pro_kopf (Solow)",
    "kassenhaltungskoeffizient (Geld)"
   ]
  },
  {
   "symbol": "pi",
   "bedeutungen": [
    "inflation",
    "unternehmergewinn (Arbeitsmarkt-Folie)"
   ]
  }
 ],
 "offene_konventionen": [
  "VORZEICHEN: einheitliche Konvention fuer +/-/neutral festlegen, inkl. Disequilibrium-Zwischenschritte (z.B. 'Lageraufbau', Netto=0). Vorschlag: nur monotone Wirkung als +/- ; reine Buchhaltungs-/Zwischenschritte ohne kausales Vorzeichen markieren.",
  "T-AMBIGUITAET (Deck 08): als Steuern fuehren (Y-T), Folien-Wortlaut 'Transferleistungen' nur als Notiz.",
  "LM*-VERTIKAL (Mundell-Fleming): Steigung/Form muss Attribut des Modells sein, sonst falsche Diagramme.",
  "endogen/exogen ist pro Modell (rollen-Objekt), NICHT global pro Groesse.",
  "dedupliziert wird nach KONZEPT (id), nicht nach Symbol."
 ],
 "darstellungs_typen": {
  "schock-kette": "komparative Statik / gerichteter Schock; Modell hat Steady State, Kette schiebt zwischen zwei Zustaenden (inkl. Solow-Familie).",
  "bedingung": "stehende Struktur-Bedingung ohne Steady State (z.B. AK: s*A>delta => endloses Wachstum); rendert in der Bedingungs-Ansicht, nicht als Kette."
 },
 "bedingungen": [
  {
   "id": "b_solow_produktionsfunktion_aggregiert",
   "modell": "solow",
   "name": "Aggregierte Produktionsfunktion",
   "links": "Y",
   "rechts": "F(K, L)",
   "relation": "=",
   "variablen": [
    "Y",
    "F",
    "K",
    "L"
   ],
   "typ": "produktionsfunktion",
   "erklaerung": "Y Gesamtoutput, F Produktionsfunktion (konstante Skalenertraege), K Kapitalstock, L Arbeitseinsatz."
  },
  {
   "id": "b_solow_produktionsfunktion_prokopf",
   "modell": "solow",
   "name": "Produktionsfunktion pro Kopf",
   "links": "y",
   "rechts": "f(k)",
   "relation": "=",
   "variablen": [
    "y",
    "f(k)",
    "k"
   ],
   "typ": "produktionsfunktion",
   "erklaerung": "y = Y/L Output pro Kopf, k = K/L Kapital pro Kopf, f(k) = F(k,1) Pro-Kopf-Produktionsfunktion."
  },
  {
   "id": "b_solow_steady_state",
   "modell": "solow",
   "name": "Steady-State-Bedingung",
   "links": "s \\cdot f(k^*)",
   "rechts": "\\delta \\cdot k^*",
   "relation": "=",
   "variablen": [
    "s",
    "f(k^*)",
    "\\delta",
    "k^*"
   ],
   "typ": "steady_state",
   "erklaerung": "Im Steady State decken die Investitionen s*f(k*) genau die Abschreibungen delta*k*, sodass Delta k = 0."
  },
  {
   "id": "b_solow_golden_rule",
   "modell": "solow",
   "name": "Golden-Rule-Bedingung",
   "links": "MPK",
   "rechts": "\\delta",
   "relation": "=",
   "variablen": [
    "MPK",
    "\\delta"
   ],
   "typ": "golden_rule",
   "erklaerung": "Konsum ist maximal, wenn das Grenzprodukt des Kapitals MPK = f'(k) der Abschreibungsrate delta entspricht."
  },
  {
   "id": "b_solow_bevoelkerung_breakeven",
   "modell": "solow_bevoelkerung",
   "name": "Break-even-Investition mit Bevoelkerungswachstum",
   "links": "\\text{Break-even-Investition}",
   "rechts": "(\\delta + n) \\cdot k",
   "relation": "=",
   "variablen": [
    "\\delta",
    "n",
    "k"
   ],
   "typ": "steady_state",
   "erklaerung": "Notwendige Investition pro Kopf, um k konstant zu halten: delta*k ersetzt Verschleiss, n*k stattet neue Arbeitskraefte aus."
  },
  {
   "id": "b_solow_bevoelkerung_steady_state",
   "modell": "solow_bevoelkerung",
   "name": "Steady-State-Bedingung mit Bevoelkerungswachstum",
   "links": "s \\cdot f(k^*)",
   "rechts": "(\\delta + n) \\cdot k^*",
   "relation": "=",
   "variablen": [
    "s",
    "f(k^*)",
    "\\delta",
    "n",
    "k^*"
   ],
   "typ": "steady_state",
   "erklaerung": "Investitionen s*f(k*) gleichen die Break-even-Investitionen (delta+n)*k* aus; n exogene Bevoelkerungswachstumsrate."
  },
  {
   "id": "b_solow_bevoelkerung_golden_rule",
   "modell": "solow_bevoelkerung",
   "name": "Golden-Rule-Bedingung mit Bevoelkerungswachstum",
   "links": "MPK",
   "rechts": "\\delta + n",
   "relation": "=",
   "variablen": [
    "MPK",
    "\\delta",
    "n"
   ],
   "typ": "golden_rule",
   "erklaerung": "Konsummaximum, wenn MPK der Summe aus Abschreibungs- und Bevoelkerungswachstumsrate entspricht."
  },
  {
   "id": "b_solow_technologie_produktionsfunktion",
   "modell": "solow_technologie",
   "name": "Produktionsfunktion pro Effizienzeinheit",
   "links": "\\hat{y}",
   "rechts": "f(\\hat{k})",
   "relation": "=",
   "variablen": [
    "\\hat{y}",
    "f(\\hat{k})",
    "\\hat{k}"
   ],
   "typ": "produktionsfunktion",
   "erklaerung": "y-hat = Y/(L*E) Output pro Effizienzeinheit, k-hat = K/(L*E) Kapital pro Effizienzeinheit, E Arbeitseffizienz."
  },
  {
   "id": "b_solow_technologie_breakeven",
   "modell": "solow_technologie",
   "name": "Break-even-Investition mit technologischem Fortschritt",
   "links": "\\text{Break-even-Investition}",
   "rechts": "(\\delta + n + g) \\cdot \\hat{k}",
   "relation": "=",
   "variablen": [
    "\\delta",
    "n",
    "g",
    "\\hat{k}"
   ],
   "typ": "steady_state",
   "erklaerung": "Investition pro Effizienzeinheit, um k-hat konstant zu halten: delta ersetzt Verschleiss, n fuer mehr Arbeitskraefte, g fuer steigende Effizienz."
  },
  {
   "id": "b_solow_technologie_steady_state",
   "modell": "solow_technologie",
   "name": "Steady-State-Bedingung pro Effizienzeinheit",
   "links": "s \\cdot f(\\hat{k}^*)",
   "rechts": "(\\delta + n + g) \\cdot \\hat{k}^*",
   "relation": "=",
   "variablen": [
    "s",
    "f(\\hat{k}^*)",
    "\\delta",
    "n",
    "g",
    "\\hat{k}^*"
   ],
   "typ": "steady_state",
   "erklaerung": "Investitionen gleichen die Break-even-Investitionen (delta+n+g)*k-hat* aus; g exogene Rate des technologischen Fortschritts."
  },
  {
   "id": "b_solow_technologie_golden_rule",
   "modell": "solow_technologie",
   "name": "Golden-Rule-Bedingung mit technologischem Fortschritt",
   "links": "MPK",
   "rechts": "\\delta + n + g",
   "relation": "=",
   "variablen": [
    "MPK",
    "\\delta",
    "n",
    "g"
   ],
   "typ": "golden_rule",
   "erklaerung": "Konsummaximum, wenn MPK = f'(k-hat*) der Summe aus Abschreibungs-, Bevoelkerungs- und Technologiewachstumsrate entspricht (aequivalent MPK - delta = n + g)."
  },
  {
   "id": "b_solow_technologie_growth_accounting",
   "modell": "solow_technologie",
   "name": "Wachstumsbilanzierung (Growth Accounting)",
   "links": "\\frac{\\Delta Y}{Y}",
   "rechts": "\\alpha \\cdot \\frac{\\Delta K}{K} + (1 - \\alpha) \\cdot \\frac{\\Delta L}{L} + \\frac{\\Delta A}{A}",
   "relation": "=",
   "variablen": [
    "\\frac{\\Delta Y}{Y}",
    "\\alpha",
    "\\frac{\\Delta K}{K}",
    "(1-\\alpha)",
    "\\frac{\\Delta L}{L}",
    "\\frac{\\Delta A}{A}"
   ],
   "typ": "growth_accounting",
   "erklaerung": "Output-Wachstum = Kapitalbeitrag (alpha = Kapitalelastizitaet) + Arbeitsbeitrag (1-alpha) + Wachstum der totalen Faktorproduktivitaet A (Solow-Residuum). Aus Y = A*F(K,L)."
  },
  {
   "id": "b_ak_produktionsfunktion",
   "modell": "ak_modell",
   "name": "Produktionsfunktion des AK-Modells",
   "links": "Y",
   "rechts": "A \\cdot K",
   "relation": "=",
   "variablen": [
    "Y",
    "A",
    "K"
   ],
   "typ": "produktionsfunktion",
   "erklaerung": "Y linear in K; A>0 exogener konstanter Produktivitaetsparameter, daher konstantes MPK = A (keine abnehmenden Grenzertraege), K im erweiterten Sinne inkl. Humankapital/Wissen."
  },
  {
   "id": "b_ak_wachstumsrate",
   "modell": "ak_modell",
   "name": "Permanente Wachstumsrate",
   "links": "\\frac{\\Delta Y}{Y} = \\frac{\\Delta K}{K}",
   "rechts": "s \\cdot A - \\delta",
   "relation": "=",
   "variablen": [
    "\\frac{\\Delta Y}{Y}",
    "\\frac{\\Delta K}{K}",
    "s",
    "A",
    "\\delta"
   ],
   "typ": "wachstumsbedingung",
   "erklaerung": "Aus Kapitalakkumulation Delta K = s*Y - delta*K folgt eine permanente Wachstumsrate von Output und Kapital in Hoehe von s*A - delta."
  },
  {
   "id": "b_ak_wachstumsbedingung",
   "modell": "ak_modell",
   "name": "Strukturelle Bedingung fuer dauerhaftes Wachstum",
   "links": "s \\cdot A",
   "rechts": "\\delta",
   "relation": ">",
   "variablen": [
    "s",
    "A",
    "\\delta"
   ],
   "typ": "wachstumsbedingung",
   "erklaerung": "Solange das Produkt aus Sparquote s und Produktivitaet A die Abschreibungsrate delta uebersteigt, waechst das Einkommen permanent ohne exogenen technologischen Fortschritt."
  },
  {
   "id": "b_2sektoren_produktionsfunktion",
   "modell": "endogen_2sektoren",
   "name": "Produktionsfunktion des Guetersektors",
   "links": "Y",
   "rechts": "F[K, (1 - u) \\cdot L \\cdot E]",
   "relation": "=",
   "variablen": [
    "Y",
    "F",
    "K",
    "u",
    "(1-u)",
    "L",
    "E"
   ],
   "typ": "produktionsfunktion",
   "erklaerung": "u konstanter Anteil der Erwerbspersonen im Forschungssektor, (1-u) im Produktionssektor, E Wissensbestand/Arbeitseffizienz; pro Effizienzeinheit: y-hat = f(k-hat, 1-u)."
  },
  {
   "id": "b_2sektoren_wissensdynamik",
   "modell": "endogen_2sektoren",
   "name": "Dynamik des Wissensbestands (Wachstumsrate g(u))",
   "links": "\\Delta E",
   "rechts": "g(u) \\cdot E",
   "relation": "=",
   "variablen": [
    "\\Delta E",
    "g(u)",
    "E"
   ],
   "typ": "wachstumsbedingung",
   "erklaerung": "Der Wissensbestand E waechst mit der Rate g(u); g ist positiv und steigend in u (g'(u)>0), also mehr Forscher = hoehere Effizienzwachstumsrate."
  },
  {
   "id": "b_2sektoren_breakeven",
   "modell": "endogen_2sektoren",
   "name": "Break-even-Investition mit g(u)",
   "links": "\\text{Break-even-Investition}",
   "rechts": "(\\delta + g(u)) \\cdot \\hat{k}",
   "relation": "=",
   "variablen": [
    "\\delta",
    "g(u)",
    "\\hat{k}"
   ],
   "typ": "steady_state",
   "erklaerung": "Investition pro Effizienzeinheit, um k-hat konstant zu halten, wenn die Effizienz mit g(u) waechst (Bevoelkerungswachstum n=0 vernachlaessigt)."
  },
  {
   "id": "b_2sektoren_steady_state",
   "modell": "endogen_2sektoren",
   "name": "Steady-State-Bedingung im Zwei-Sektoren-Modell",
   "links": "s \\cdot f(\\hat{k}^*, 1 - u)",
   "rechts": "(\\delta + g(u)) \\cdot \\hat{k}^*",
   "relation": "=",
   "variablen": [
    "s",
    "f(\\hat{k}^*, 1-u)",
    "\\delta",
    "g(u)",
    "\\hat{k}^*"
   ],
   "typ": "steady_state",
   "erklaerung": "Investitionen gleichen die Break-even-Investitionen (delta+g(u))*k-hat* aus; k-hat = K/(L*E)."
  },
  {
   "id": "b_2sektoren_wachstumsrate_prokopf",
   "modell": "endogen_2sektoren",
   "name": "Dauerhafte Wachstumsrate des Pro-Kopf-Outputs",
   "links": "\\frac{\\Delta(Y/L)}{Y/L}",
   "rechts": "g(u)",
   "relation": "=",
   "variablen": [
    "\\frac{\\Delta(Y/L)}{Y/L}",
    "g(u)"
   ],
   "typ": "wachstumsbedingung",
   "erklaerung": "Langfristige Wachstumsrate des Pro-Kopf-Outputs (Lebensstandard) entspricht der endogenen Effizienzwachstumsrate g(u), da y-hat im Steady State konstant ist."
  },
  {
   "id": "b_mf_trilemma",
   "modell": "mundell_fleming_gross",
   "name": "Trilemma des Wechselkursregimes",
   "links": "\\text{freier Kapitalverkehr} + \\text{fester Wechselkurs} + \\text{autonome Geldpolitik}",
   "rechts": "\\text{waehle 2 von 3}",
   "relation": "<",
   "variablen": [
    "\\text{Kapitalmobilitaet}",
    "\\text{fester WK}",
    "\\text{autonome Geldpolitik}"
   ],
   "typ": "tradeoff",
   "erklaerung": "Ein Land kann nicht gleichzeitig (1) freien Kapitalverkehr, (2) einen festen Wechselkurs UND (3) eine autonome (unabhaengige) Geldpolitik haben -- nur zwei von drei sind vereinbar. Beispiele: USA (freier Kapitalverkehr + autonome Geldpolitik -> flexibler WK), Hongkong (freier Kapitalverkehr + fester WK -> keine autonome Geldpolitik), China (autonome Geldpolitik + fester WK -> Kapitalverkehrskontrollen). KEIN Kausalgraph/keine Schock-Kette: stehende Struktur-Bedingung (Unmoeglichkeitsaussage), kein Steady-State-Uebergang. Quelle: Vorlesung 09 Folie 31; direkte Konsequenz aus Mundell-Fleming (Interventionspflicht bei festem WK zwingt Geldmenge zur Wechselkursverteidigung, siehe k_mf_geld_fest)."
  },
  {
   "id": "b_solow_konvergenz_absolut",
   "modell": "solow",
   "name": "Absolute Konvergenz (nur bei gleichem Steady State)",
   "links": "k_0^{arm} < k_0^{reich}",
   "rechts": "k^{arm} \\to k^* \\text{ schneller als } k^{reich} \\to k^*",
   "relation": "=",
   "variablen": [
    "k_0",
    "k^*",
    "s",
    "n",
    "\\delta"
   ],
   "typ": "wachstumsbedingung",
   "erklaerung": "Haben zwei Volkswirtschaften DENSELBEN Steady State k* (gleiche s, n, delta), aber unterschiedliche Anfangskapitalstoecke, dann konvergieren sie zueinander: die aermere (kleineres k0) waechst schneller. Empirisch nur innerhalb aehnlicher Laendergruppen (z.B. US-Bundesstaaten) bestaetigt, NICHT im globalen Laendervergleich (Vorlesung Folie 28: keine klare Konvergenz zwischen Einkommensgruppen)."
  },
  {
   "id": "b_solow_konvergenz_bedingt",
   "modell": "solow",
   "name": "Bedingte (konditionale) Konvergenz",
   "links": "k^{*}_{Land A} \\neq k^{*}_{Land B}",
   "rechts": "\\text{jedes Land konvergiert zu seinem EIGENEN } k^*",
   "relation": "=",
   "variablen": [
    "k^*",
    "s",
    "n",
    "\\delta"
   ],
   "typ": "wachstumsbedingung",
   "erklaerung": "Unterscheiden sich Laender in Sparquote s, Bevoelkerungswachstum n oder Bildungsniveau, haben sie UNTERSCHIEDLICHE Steady States k*. Jedes Land naehert sich dann nur seinem eigenen k* an (~2% p.a. It Empirie), nicht einem gemeinsamen globalen Niveau. Das ist die vom Solow-Modell tatsaechlich vorhergesagte und empirisch (nach Kontrolle fuer s, n, Bildung) bestaetigte Form der Konvergenz (Mankiw Kap.10; Vorlesung Folie 29: 'konditionale Konvergenz')."
  },
  {
   "id": "b_steady_state",
   "modell": "natuerliche_arbeitslosenquote",
   "name": "Steady-State-Flussgleichgewicht des Arbeitsmarkts",
   "links": "s \\cdot E",
   "rechts": "f \\cdot U",
   "relation": "=",
   "variablen": [
    "s",
    "E",
    "f",
    "U"
   ],
   "typ": "steady_state",
   "erklaerung": "Im Steady State (konstante Arbeitslosenquote U/L) muss der Fluss aus Beschaeftigung in Arbeitslosigkeit (s*E, Separationen) gleich dem Fluss aus Arbeitslosigkeit in Beschaeftigung (f*U, Neueinstellungen) sein. Daraus folgt durch Aufloesen nach U/L (mit E=L-U): U/L = s/(s+f), die natuerliche Arbeitslosenquote (Hall 1979; Vorlesung Folie 14-15; Mankiw Kap.7.1)."
  },
  {
   "id": "b_firmen_optimum",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "name": "Gewinnmaximales Arbeitsnachfrage-Optimum der Firma",
   "links": "w",
   "rechts": "MPL",
   "relation": "=",
   "variablen": [
    "w",
    "MPL",
    "L"
   ],
   "typ": "produktionsfunktion",
   "erklaerung": "Aus der Gewinnmaximierung der Firma (Gewinn = Y - MPL*L - MPK*K) folgt durch Ableiten nach L: d(Gewinn)/dL = 0 => dF(K,L)/dL = w = MPL. Die Firma stellt so lange ein, bis der Reallohn dem Grenzprodukt der Arbeit entspricht -- das definiert die Arbeitsnachfragekurve L^d(w) (Vorlesung Folie 34; Mankiw Kap.3/7.3)."
  },
  {
   "id": "b_lohnrigiditaet",
   "modell": "arbeitsmarkt_lohnrigiditaet",
   "name": "Reallohn ueber Gleichgewichtsniveau => Angebotsueberschuss",
   "links": "W/P",
   "rechts": "(W/P)^*",
   "relation": ">",
   "variablen": [
    "W/P",
    "(W/P)^*",
    "L^s",
    "L^d"
   ],
   "typ": "marktungleichgewicht",
   "erklaerung": "Liegt der (starre) Reallohn W/P oberhalb des markträumenden Gleichgewichtsniveaus (W/P)^*, dann uebersteigt das Arbeitsangebot L^s die Arbeitsnachfrage L^d (L^s > L^d). Diese Angebotsueberschuss-Arbeitslosigkeit ist die strukturelle Arbeitslosigkeit; Ursachen sind Mindestlohn, Gewerkschaftsmacht oder Effizienzloehne (Vorlesung Folie 31-32; Mankiw Kap.7.3)."
  },
  {
   "id": "b_sras_kurve",
   "modell": "as_kurve",
   "name": "Kurzfristige Gesamtangebotskurve (SRAS)",
   "links": "Y",
   "rechts": "\\bar{Y} + \\alpha(P - P^e)",
   "relation": "=",
   "variablen": [
    "output",
    "natuerliches_niveau",
    "steigung_sras",
    "preisniveau",
    "erwartetes_preisniveau"
   ],
   "typ": "verhaltensgleichung",
   "erklaerung": "Zentralgleichung aller drei SRAS-Mikrofundierungen (Preisstarrheiten, unvollk. Information, Lohnstarrheiten): Der Output weicht von seinem natuerlichen Niveau Ybar ab, wenn das tatsaechliche Preisniveau P vom erwarteten Preisniveau P^e abweicht. Der Parameter α misst, wie stark Y auf (P-P^e) reagiert; 1/α ist die Steigung der SRAS-Kurve im (Y,P)-Diagramm (Vorlesung Folie 4/19-20/24; Mankiw Kap.15.1)."
  },
  {
   "id": "b_okun",
   "modell": "phillips_kurve",
   "name": "Okunsches Gesetz (Verbindung SRAS-Luecke <-> zyklische Arbeitslosigkeit)",
   "links": "\\tfrac{1}{\\alpha}(Y - \\bar{Y})",
   "rechts": "-\\beta(u - u^n)",
   "relation": "=",
   "variablen": [
    "output",
    "natuerliches_niveau",
    "steigung_sras",
    "arbeitslosigkeit",
    "natuerliche_rate",
    "steigung_phillips"
   ],
   "typ": "verhaltensgleichung",
   "erklaerung": "Ueberbrueckt SRAS-Kurve und Phillips-Kurve: liegt der Output ueber seinem natuerlichen Niveau (positive SRAS-Luecke), liegt die Arbeitslosigkeit unter ihrer natuerlichen Rate (negative zyklische Arbeitslosigkeit) -- daher das Minuszeichen. Durch Einsetzen dieser Identitaet in die SRAS-Inflationsdarstellung π=π^e+(1/α)(Y-Ybar)+v ergibt sich direkt die Phillips-Kurve (Vorlesung Folie 24; Mankiw Kap.15.2, unter Rueckgriff auf Kap.11)."
  },
  {
   "id": "b_phillips_kurve",
   "modell": "phillips_kurve",
   "name": "Phillips-Kurve (moderne Form)",
   "links": "\\pi",
   "rechts": "\\pi^e - \\beta(u - u^n) + v",
   "relation": "=",
   "variablen": [
    "inflation",
    "inflation_erwartet",
    "steigung_phillips",
    "arbeitslosigkeit",
    "natuerliche_rate",
    "angebotsschock"
   ],
   "typ": "verhaltensgleichung",
   "erklaerung": "Zentralgleichung der Phillips-Kurve: die Inflation haengt ab von der erwarteten Inflation π^e, der zyklischen Arbeitslosigkeit (u-u^n) gewichtet mit dem Reaktionskoeffizienten β, und einem Angebotsschock v. Aus der SRAS-Kurve zusammen mit dem Okunschen Gesetz hergeleitet (Vorlesung Folie 22/24; Mankiw Kap.15.2)."
  },
  {
   "id": "b_adaptive_erwartungen",
   "modell": "phillips_kurve",
   "name": "Adaptive Erwartungsbildung",
   "links": "\\pi^e",
   "rechts": "\\pi_{-1}",
   "relation": "=",
   "variablen": [
    "inflation_erwartet",
    "inflation"
   ],
   "typ": "definition",
   "erklaerung": "Unter adaptiven Erwartungen entspricht die erwartete Inflation der tatsaechlichen Inflation des Vorjahres. Eingesetzt in die Phillips-Kurve ergibt sich π=π_{-1}-β(u-u^n)+v: die Inflation traegt sich selbst fort (Inflationstraegheit), bis ein Ereignis (Rezession/Angebotsschock) sie stoppt (Vorlesung Folie 27-28; Mankiw Kap.15.2 Abschnitt 'Adaptive Erwartungen und Inflationstraegheit')."
  },
  {
   "id": "b_nairu",
   "modell": "phillips_kurve",
   "name": "NAIRU: konstante Inflation bei natuerlicher Arbeitslosigkeit",
   "links": "u",
   "rechts": "u^n",
   "relation": "=",
   "variablen": [
    "arbeitslosigkeit",
    "natuerliche_rate",
    "inflation",
    "inflation_erwartet"
   ],
   "typ": "verhaltensgleichung",
   "erklaerung": "Unter adaptiven Erwartungen (π=π_{-1}-β(u-u^n)+v) gilt: liegt die Arbeitslosigkeit exakt auf der natuerlichen Rate (u=u^n) und faellt kein Angebotsschock an (v=0), dann folgt π=π_{-1} -- die Inflation bleibt konstant auf ihrem bisherigen Niveau (weder Beschleunigung noch Verlangsamung). Daher der Name NAIRU: Non-Accelerating Inflation Rate of Unemployment (Vorlesung Folie 27/33; Mankiw Kap.15.2)."
  }
 ],
 "bedingungen_schema": {
  "hinweis": "Bedingungs-Ansicht = grosses '=' mittig, Gleichung mit schwebenden Symbolen. Aus NotebookLM (nur VL, 2 Wachstums-Decks) zu fuellen.",
  "record": {
   "id": "b_...",
   "modell": "<modell-id>",
   "name": "...",
   "links": "LaTeX linke Seite",
   "rechts": "LaTeX rechte Seite",
   "relation": "= | > | <",
   "variablen": [
    "<symbol/groesse-id>",
    "..."
   ],
   "typ": "steady_state | golden_rule | wachstumsbedingung | produktionsfunktion | growth_accounting | tradeoff | marktungleichgewicht | verhaltensgleichung | definition"
  }
 },
 "relation_typen": {
  "besteht-aus": "Komposition: Teile bilden das Ganze (IS-LM = IS-Kurve + LM-Kurve).",
  "abgeleitet-durch-P": "Erzeugung durch P-Variation (AD aus IS-LM/MF).",
  "abgeleitet": "generische Ableitung/Re-Ausdruck ohne P-Variation (Phillips aus AS-Kurve)."
 }
}
