// JS version of params.py and modules.py from g2ools

parammap = {
  "Dst_2": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Out, 1 ~ Fx, 2 ~ Bus"
    ],
    "comments": ""
  },
  "OffOn": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Off, 1 ~ On"
    ],
    "comments": ""
  },
  "Pad_1": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ 0 dB, 1 ~ +6 dB"
    ],
    "comments": ""
  },
  "Dst_1": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ Out 1/2, 1 ~ Out 3/4, 2 ~ Fx 1/2, 3 ~ Fx 3/4, 4 ~ Bus 1/2, 5 ~ Bus 3/4"
    ],
    "comments": ""
  },
  "FreqCoarse": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ -64, 64 ~ 0, 127 ~ +63",
      "0 ~ 8.1756 Hz, 64 ~ 329.63 Hz, 127 ~ 12.55 kHz",
      "0 ~ x0.0248, 64 ~ x1.0000, 127 ~ x38.055",
      "0 ~ 0 Hz, 64 ~ 1:1, 127 ~ 64:1"
    ],
    "comments": "Modes : Semi, Freq, Fac and Part"
  },
  "FreqFine": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ -50.0, 64 ~ +0.0, 127 ~ +49.2"
    ],
    "comments": "In cents"
  },
  "Level_100": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0, 64 ~ 50, 127 ~ 100"
    ],
    "comments": "Can be used to denote a =not necessarily linear) 0 .. 100 range or a percentage"
  },
  "FreqMode_3": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Semi, 1 ~ Freq, 2 ~ Fac, 3 ~ Part"
    ],
    "comments": ""
  },
  "PW": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 50%, 127 ~ 99%"
    ],
    "comments": ""
  },
  "OscBWaveform": {
    "low": 0,
    "high": 4,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ Tri, 2 ~ Saw, 3 ~ Pulse, 4 ~ DualSaw"
    ],
    "comments": ""
  },
  "FmLinTrk": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Lin, 1 ~ Trk"
    ],
    "comments": ""
  },
  "OscWaveform_3": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ Sine1, 1 ~ Sine2, 2 ~ Sine3, 4 ~ TriSaw, 5 ~ DoubleSaw, 6 ~ Pulse, 7 ~ SymPuls"
    ],
    "comments": ""
  },
  "OscWaveform_2": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ Tri, 2 ~ Saw, 3 ~ Square, 4 ~ Pulse 25%, 5 ~ Pulse 10%"
    ],
    "comments": ""
  },
  "ReverbTime": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.0ms, 127 ~ 3.000s",
      "0 ~ 0.0ms, 127 ~ 6.000s",
      "0 ~ 0.0ms, 127 ~ 9.000s",
      "0 ~ 0.0ms, 127 ~ 12.00s"
    ],
    "comments": "Small, Medium, Large, Hall. Determined by [RoomType]"
  },
  "RoomType": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Small, 1 ~ Medium, 2 ~ Large, 3 ~ Hall"
    ],
    "comments": "Determines ranges for [ReverbTime]"
  },
  "sw_3": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ sw1, 1 ~ sw2, 2 ~ sw3, 3 ~ sw4, 4 ~ sw5, 5 ~ sw6, 6 ~ sw7, 7 ~ sw8"
    ],
    "comments": ""
  },
  "ValSwVal": {
    "low": 0,
    "high": 63,
    "def": 0,
    "defin": [
      "0 ~ 0, 62 ~ 62, 63 ~ 64"
    ],
    "comments": ""
  },
  "Bipolar_127": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ -64, 64 ~ 0, 127 ~ 64"
    ],
    "comments": "not necesarraly a linear control"
  },
  "LogLin": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Log, 1 ~ Lin"
    ],
    "comments": ""
  },
  "MixLevel": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0, 64 ~ 50, 127 ~ 100",
      "0 ~ 0, 64 ~ 50, 127 ~ 100",
      "0 ~ -{00}, 64 ~ -17.6, 127 ~ -0"
    ],
    "comments": "Lin, Exp, dB"
  },
  "ExpLin_2": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Exp, 1 ~ Lin, 2 ~ dB"
    ],
    "comments": ""
  },
  "EnvShape_3": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ LogExp, 1 ~ LinExp, 2 ~ ExpExp, 3 ~ LinLin"
    ],
    "comments": ""
  },
  "EnvTime": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.5m, 127 ~ 45.0s"
    ],
    "comments": ""
  },
  "EnvLevel": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.0, 126 ~ 63.0, 127 ~ 64.0"
    ],
    "comments": ""
  },
  "PosNegInvBipInv": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ Pos, 1 ~ PosInv, 2 ~ Neg, 3 ~ NegInv, 4 ~ Bip, 5 ~ BipInv"
    ],
    "comments": ""
  },
  "EnvNR": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Normal, 1 ~ Reset"
    ],
    "comments": ""
  },
  "PartialRange": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ {+-}0, 1 ~ {+-}0, 64 ~ {+-}32, 65 ~ {+-}32*, 126 ~ {+-}63*, 126 ~ {+-}63*"
    ],
    "comments": "* clipped at {+-}32 and the lowest bit is not effective"
  },
  "LfoRate_3": {
    "low": 0,
    "high": 127,
    "def": 1,
    "defin": [
      "0 ~ 699s, 127 ~ 5.46s",
      "1 ~ 62.9s, 127 ~ 24.4 Hz",
      "2 ~ 0.26 Hz, 127 ~ 392 Hz",
      "3 ~ 24, 127 ~ 214"
    ],
    "comments": "Sub, Lo, Hi, BPM =BPM is the same as for RateBpm). Determined by [LfoRange_3]"
  },
  "PolyMono": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Poly, 1 ~ Mono"
    ],
    "comments": ""
  },
  "OutTypeLfo": {
    "low": 0,
    "high": 5,
    "def": 4,
    "defin": [
      "0 ~ Pos, 1 ~ PosInv, 2 ~ Neg, 3 ~ NegInv, 4 ~ Bip, 5 ~ BipInv"
    ],
    "comments": ""
  },
  "LfoRange_3": {
    "low": 0,
    "high": 3,
    "def": 1,
    "defin": [
      "0 ~ Rate Sub, 1 ~ Rate Lo, 2 ~ Rate Hi, 3 ~ BPM"
    ],
    "comments": "Determines [LfoRate_3]"
  },
  "LfoWaveform_1": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ Tri, 2 ~ Saw, 3 ~ Square, 4 ~ RndStep, 5 ~ Rnd, 6 ~ RndPulse, 7 ~ RndRoundedPulse"
    ],
    "comments": ""
  },
  "LfoRate_4": {
    "low": 0,
    "high": 127,
    "def": 1,
    "defin": [
      "0 ~ 699s, 127 ~ 5.46s",
      "1 ~ 62.9s, 127 ~ 24.4 Hz",
      "2 ~ 0.26 Hz, 127 ~ 392 Hz",
      "3 ~ 24, 127 ~ 214",
      "4 ~ 64/1, 64 ~ 1/4D, 127 ~ 1/64T"
    ],
    "comments": "Sub, Lo, Hi, BPM, Clock =BPM is the same as for RateBpm). Determined by [LfoRange_4]"
  },
  "LfoRange_4": {
    "low": 0,
    "high": 4,
    "def": 0,
    "defin": [
      "0 ~ Rate Sub, 1 ~ Rate Lo, 2 ~ Rate Hi, 3 ~ BPM, 4 ~ Clock"
    ],
    "comments": "Determines [LfoRate_4]"
  },
  "Kbt_1": {
    "low": 0,
    "high": 4,
    "def": 1,
    "defin": [
      "0 ~ Off, 1 ~ On"
    ],
    "comments": ""
  },
  "Kbt_4": {
    "low": 0,
    "high": 4,
    "def": 0,
    "defin": [
      "0 ~ Off, 1 ~ 25%, 2 ~ 50%, 3 ~ 75%, 4 ~ 100%"
    ],
    "comments": ""
  },
  "LfoShpAPW": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 1%, 64 ~ 50%, 127 ~ 98%"
    ],
    "comments": ""
  },
  "Phase": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0, 64 ~ 180, 127 ~ 357"
    ],
    "comments": "In degrees, 360 degrees in a full circle"
  },
  "LfoShpA__Waveform": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ CosBell, 2 ~ TriBell, 3 ~ Saw2Tri, 4 ~ Sqr2Tri, 5 ~ Sqr"
    ],
    "comments": ""
  },
  "LfoA_Waveform": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ Tri, 2 ~ Saw, 3 ~ Aqr, 4 ~ RndStep, 5 ~ Rnd"
    ],
    "comments": ""
  },
  "FreqMode_2": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Semi, 1 ~ Freq, 2 ~ Fac"
    ],
    "comments": ""
  },
  "SaturateCurve": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ 1, 1 ~ 2, 2 ~ 3, 3 ~ 4"
    ],
    "comments": ""
  },
  "NoiseColor": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0 =White), 64 ~ 50, 127 ~ 100 =Colored)"
    ],
    "comments": ""
  },
  "EqdB": {
    "low": 64,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ -18.0 dB, 64 ~ 0.0 dB, 127 ~ 18.0 dB"
    ],
    "comments": ""
  },
  "EqLoFreq": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ 80 Hz, 1 ~ 110 Hz, 2 ~ 160 Hz"
    ],
    "comments": ""
  },
  "EqHiFreq": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ 6 kHz, 1 ~ 8 kHz, 2 ~ 12 kHz"
    ],
    "comments": ""
  },
  "EqMidFreq": {
    "low": 0,
    "high": 127,
    "def": 93,
    "defin": [
      "0 ~ 100 Hz, 64 ~ 910 Hz, 93 ~ 2.48 kHz, 127 ~ 8.00 kHz"
    ],
    "comments": ""
  },
  "ShpExpCurve": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ x2, 1 ~ x3, 2 ~ x4, 3 ~ x5"
    ],
    "comments": ""
  },
  "LogicTime": {
    "low": 0,
    "high": 127,
    "def": 1,
    "defin": [
      "0 ~ 0.10m, 127 ~ 1.00s",
      "0 ~ 1.04m, 127 ~ 10.0s",
      "0 ~ 10.4m, 127 ~ 100.0s"
    ],
    "comments": "Sub, Lo, Hi. Determined by [LogicRange]"
  },
  "LogicRange": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Sub, 1 ~ Lo, 2 ~ Hi"
    ],
    "comments": "Determines [LogicTime]"
  },
  "PulseMode": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Positive edge trigger, 1 ~ Negative edge trigger"
    ],
    "comments": ""
  },
  "Pad_3": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ 0 dB, 1 ~ -6 dB, 2 ~ -12 dB"
    ],
    "comments": ""
  },
  "PosNegInv": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Pos, 1 ~ PosInv, 2 ~ Neg, 3 ~ NegInv"
    ],
    "comments": ""
  },
  "LogicDelayMode": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Positive edge delay, 1 ~ Negative edge delay, 2 ~ Cycle delay"
    ],
    "comments": ""
  },
  "LevBipUni": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ -64, 64 ~ 0, 127 ~ 64",
      "0 ~ 0, 64 ~ 50, 127 ~ 100"
    ],
    "comments": "Bip, Uni. Determined by [BipUni] setting"
  },
  "BipUni": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Bip, 1 ~ Uni"
    ],
    "comments": "Determines display for [LevBipUni]"
  },
  "Vowel": {
    "low": 0,
    "high": 8,
    "def": 0,
    "defin": [
      "0 ~ A, 1 ~ E, 2 ~ I, 3 ~ O, 4 ~ U, 5 ~ Y, 6 ~ AA, 7 ~ AE, 8 ~ OE"
    ],
    "comments": ""
  },
  "FltFreq": {
    "low": 0,
    "high": 127,
    "def": 75,
    "defin": [
      "0 ~ 13.75 Hz, 64 ~ 554.4Hz, 75 ~ 1.05 kHz, 127 ~ 21.1 kHz"
    ],
    "comments": ""
  },
  "Level_200": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0, 64 ~ 100, 127 ~ 200"
    ],
    "comments": "Percentage"
  },
  "GcOffOn": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ GC Off, 1 ~ GC On"
    ],
    "comments": ""
  },
  "Res_1": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.50, 64 ~ 1.67, 127 ~ 50"
    ],
    "comments": ""
  },
  "FltSlope_1": {
    "low": 0,
    "high": 1,
    "def": 1,
    "defin": [
      "0 ~ 6 dB/Oct, 1 ~ 12 dB/Oct"
    ],
    "comments": ""
  },
  "FltSlope_2": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ 12 dB/Oct, 1 ~ 24 dB/Oct"
    ],
    "comments": ""
  },
  "LpBpHpBr": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ LP, 1 ~ BP, 2 ~ HP, 3 ~ BR"
    ],
    "comments": ""
  },
  "SustainMode_2": {
    "low": 0,
    "high": 3,
    "def": 2,
    "defin": [
      "0 ~ L1, 1 ~ L2, 2 ~ L3, 3 ~ Trg"
    ],
    "comments": ""
  },
  "PosNegInvBip": {
    "low": 0,
    "high": 4,
    "def": 0,
    "defin": [
      "0 ~ Pos, 1 ~ PosInv, 2 ~ Neg, 3 ~ NegInv, 4 ~ Bip"
    ],
    "comments": ""
  },
  "LpBpHp": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ LP, 1 ~ BP, 2 ~ HP"
    ],
    "comments": ""
  },
  "MidiData": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0, 127 ~ 127"
    ],
    "comments": "One to one mapping with MIDI data values"
  },
  "MidiCh_20": {
    "low": 0,
    "high": 20,
    "def": 0,
    "defin": [
      "0 ~ ch1, 1 ~ ch 2, 2 ~ ch3, 3 ~ ch4, 4 ~ ch5, 5 ~ ch6, 6 ~ ch7, 7 ~ ch8, 8 ~ ch9, 9 ~ ch10, 10 ~ ch11, 11 ~ ch12, 12 ~ ch13, 13 ~ ch14, 14 ~ ch15, 15 ~ ch16, 16 ~ This, 17 ~ Slot A, 18 ~ Slot B, 19 ~ Slot C, 20 ~ Slot D"
    ],
    "comments": ""
  },
  "DrumSynthFreq": {
    "low": 0,
    "high": 127,
    "def": 42,
    "defin": [
      "0 ~ 20 Hz, 64 ~ 127 Hz, 127 ~ 784 Hz"
    ],
    "comments": ""
  },
  "DrumSynthRatio": {
    "low": 0,
    "high": 127,
    "def": 15,
    "defin": [
      "0 ~ 1:1, 64 ~ x2.52, 127 ~ x6.26"
    ],
    "comments": ""
  },
  "DrumSynthNoiseFlt": {
    "low": 0,
    "high": 127,
    "def": 57,
    "defin": [
      "0 ~ 10.30 Hz, 64 ~ 415.3 Hz, 127 ~ 15.8 kHz"
    ],
    "comments": ""
  },
  "ClipShape": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Asym, 1 ~ Sym"
    ],
    "comments": ""
  },
  "OverdriveType": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Soft, 1 ~ Hard, 2 ~ Fat, 3 ~ Heavy"
    ],
    "comments": ""
  },
  "ScratchRatio": {
    "low": 0,
    "high": 127,
    "def": 80,
    "defin": [
      "0 ~ -x4.00, 64 ~ x0, 80 ~ x1.00, 127 ~ x4.00"
    ],
    "comments": "negative speeds mean backwards playing"
  },
  "ScratchDelay": {
    "low": 0,
    "high": 3,
    "def": 2,
    "defin": [
      "0 ~ 12.5m, 1 ~ 25m, 2 ~ 50m, 3 ~ 100m"
    ],
    "comments": "mili seconds"
  },
  "GateMode": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ AND, 1 ~ NAND, 2 ~ OR, 3 ~ NOR, 4 ~ XOR, 5 ~ XNOR"
    ],
    "comments": ""
  },
  "MixInvert": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Normal, 1 ~ Inverted"
    ],
    "comments": ""
  },
  "RateBpm": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 24 BPM, 64 ~ 120 BPM, 127 ~ 214 BPM"
    ],
    "comments": ""
  },
  "InternalMaster": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Internal, 1 ~ Master"
    ],
    "comments": ""
  },
  "ClkGenBeatSync": {
    "low": 0,
    "high": 5,
    "def": 2,
    "defin": [
      "0 ~ 1, 1 ~ 2, 2 ~ 4, 3 ~ 8, 4 ~ 16, 5 ~ 32"
    ],
    "comments": ""
  },
  "ClkGenSwing": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 50.0%, 64 ~ 62.6%, 127 ~ 75.0%"
    ],
    "comments": ""
  },
  "Range_128": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 1, 127 ~ 128"
    ],
    "comments": "Mapping of origin zero to origin one"
  },
  "ClkDivMode": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Gated, 1 ~ Toggled"
    ],
    "comments": "Gated mode follows input clocks positive pulse width"
  },
  "EnvFollowAttack": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ Fast, 1 ~ 0.53m, 64 ~ 23.0m, 127 ~ 1.00s"
    ],
    "comments": ""
  },
  "EnvFollowRelease": {
    "low": 0,
    "high": 127,
    "def": 20,
    "defin": [
      "0 ~ 10.0m, 20 ~ 24.6m, 64 ~ 177m, 127 ~ 3.00s"
    ],
    "comments": ""
  },
  "NoteRange": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ {+-}0, 1 ~ {+-}0.5, 64 ~ {+-}32, 126 ~ {+-}63.0, 127 ~ {+-}64.0"
    ],
    "comments": ""
  },
  "NoteQuantNotes": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ Off, 1 ~ 1, 127 ~ 127"
    ],
    "comments": ""
  },
  "sw_2": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ sw1, 1 ~ sw2, 2 ~ sw3, 3 ~ sw4"
    ],
    "comments": ""
  },
  "LevAmpGain": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ x0.00, 64 ~ x1.00, 127 ~ x4.00"
    ],
    "comments": ""
  },
  "LinDB": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Lin, 1 ~ dB"
    ],
    "comments": ""
  },
  "RectMode": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Half wave positive, 1 ~ Half wave negative, 2 ~ Full wave positive, 3 ~ Full wave negative"
    ],
    "comments": ""
  },
  "ShpStaticMode": {
    "low": 0,
    "high": 3,
    "def": 1,
    "defin": [
      "0 ~ Inv x3, 1 ~ Inv x2, 2 ~ x2, 3 ~ x3"
    ],
    "comments": ""
  },
  "TrigGate": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Trig, 1 ~ Gate"
    ],
    "comments": ""
  },
  "AdAr": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ AD, 1 ~ AR"
    ],
    "comments": "Selects between Decay and Release modes"
  },
  "Range_64": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.0, 1 ~ 0.5, 64 ~ 32.0, 126 ~ 63.0, 127 ~ 64.0"
    ],
    "comments": ""
  },
  "HpLpSlopeMode": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ 6dB/Oct, 1 ~ 12 dB/Oct, 2 ~ 18 dB/Oct, 3 ~ 24 dB/Oct, 4 ~ 30 dB/Oct, 5 ~ 36 dB/Oct"
    ],
    "comments": ""
  },
  "FlangerRate": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 0.01 Hz, 64 ~ 1.46 Hz, 127 ~ 2.91 Hz"
    ],
    "comments": ""
  },
  "Sw_1": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ sw1, 1 ~ sw2"
    ],
    "comments": ""
  },
  "FlipFlopMode": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ D type, 1 ~ SR type"
    ],
    "comments": ""
  },
  "ClassicSlope": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ 12 dB/Oct, 1 ~ 18 dB/Oct, 2 ~ 24 dB/Oct"
    ],
    "comments": ""
  },
  "OscA_Waveform": {
    "low": 0,
    "high": 5,
    "def": 2,
    "defin": [
      "0 ~ Sine, 1 ~ Tri, 2 ~ Saw, 3 ~ Square, 4 ~ Pulse 25%, 5 ~ Pulse 10%"
    ],
    "comments": ""
  },
  "FreqShiftFreq": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.000 Hz, 64 ~ 1.12 Hz, 127 ~ 8.78 Hz",
      "0 ~ 0.000 Hz, 64 ~ 12.5 Hz, 127 ~ 97.6 Hz",
      "0 ~ 0.000 Hz, 64 ~ 201 Hz, 127 ~ 1568 Hz"
    ],
    "comments": "Sub, Lo, Hi. Determined by [FreqShiftRange]"
  },
  "FreqShiftRange": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Sub, 1 ~ Lo, 2 ~ Hi"
    ],
    "comments": "Determines [FreqShiftFreq] range"
  },
  "Freq_2": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 100.0 Hz, 64 ~ 1.29 kHz, 127 ~ 16.0 kHz"
    ],
    "comments": ""
  },
  "FltPhaseNotchCount": {
    "low": 0,
    "high": 5,
    "def": 2,
    "defin": [
      "0 ~ 1, 1 ~ 2, 2 ~ 3, 3 ~ 4, 4 ~ 5, 5 ~ 6"
    ],
    "comments": ""
  },
  "FltPhaseType": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Notch, 1 ~ Peak, 2 ~ Deep"
    ],
    "comments": ""
  },
  "Freq_3": {
    "low": 0,
    "high": 127,
    "def": 60,
    "defin": [
      "0 ~20.00 Hz , 60 ~ 470.5 Hz, 64 ~ 580.8 Hz, 127 ~ 16.0 kHz"
    ],
    "comments": ""
  },
  "EqPeakBandwidth": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 2.00 Oct, 64 ~ 1.00 Oct, 127 ~ 0.02 Oct"
    ],
    "comments": ""
  },
  "VocoderBand": {
    "low": 0,
    "high": 16,
    "def": 0,
    "defin": [
      "0 ~ Off, 1 ~ 1, 2 ~ 2, 3 ~ 3, 4 ~ 4, 5 ~ 5, 6 ~ 6, 7 ~ 7, 8 ~ 8, 9 ~ 9, 10 ~ 10, 11 ~ 11, 12 ~ 12, 13 ~ 13, 14 ~ 14, 15 ~ 15, 16 ~ 16"
    ],
    "comments": ""
  },
  "ActiveMonitor": {
    "low": 0,
    "high": 1,
    "def": 1,
    "defin": [
      "0 ~ Monitor,1 ~ Active "
    ],
    "comments": ""
  },
  "Fade12Mix": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ O1:127, 64 ~ Mute, 127 ~ O2:127"
    ],
    "comments": ""
  },
  "Fade21Mix": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ I1:127, 64 ~ Mute, 127 ~ I2:127"
    ],
    "comments": ""
  },
  "LevScaledB": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ -8.0 dB, 64 ~ 0.0 dB, 127 ~ 8.0 dB"
    ],
    "comments": ""
  },
  "LevModAmRm": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ None, 64 ~ AM, 127 ~ RM"
    ],
    "comments": ""
  },
  "DigitizerBits": {
    "low": 0,
    "high": 12,
    "def": 11,
    "defin": [
      "0 ~ 1, 1 ~ 2, 2 ~ 3, 3 ~ 4, 4 ~ 5, 5 ~ 6, 6 ~ 7, 7 ~ 8, 8 ~ 9, 9 ~ 10, 10 ~ 11, 11 ~ 12, 12 ~ Off"
    ],
    "comments": ""
  },
  "DigitizerRate": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 32.70 Hz, 64 ~ 1.32 kHz, 127 ~ 50.2 kHz"
    ],
    "comments": ""
  },
  "SustainMode_1": {
    "low": 0,
    "high": 1,
    "def": 1,
    "defin": [
      "0 ~ L1, 1 ~ L2"
    ],
    "comments": ""
  },
  "LoopOnce": {
    "low": 0,
    "high": 1,
    "def": 1,
    "defin": [
      "0 ~ Once, 1 ~ Loop"
    ],
    "comments": ""
  },
  "SeqLen": {
    "low": 0,
    "high": 15,
    "def": 0,
    "defin": [
      "0 ~ 1, 1 ~ 2, 2 ~ 3, 3 ~ 4, 4 ~ 5, 5 ~ 6, 6 ~ 7, 7 ~ 8, 8 ~ 9, 9 ~ 10, 10 ~ 11, 11 ~ 12, 12 ~ 13, 13 ~ 14, 14 ~ 15, 15 ~ 16"
    ],
    "comments": ""
  },
  "Pad_2": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ 0 dB, 1 ~ -6 dB"
    ],
    "comments": ""
  },
  "Source_1": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ FX 1/2, 1 ~ FX 3/4"
    ],
    "comments": ""
  },
  "Pad_4": {
    "low": 0,
    "high": 3,
    "def": 1,
    "defin": [
      "0 ~ -12 dB, 1 ~ -6 dB, 2 ~ 0 dB,3 ~ +6 dB"
    ],
    "comments": ""
  },
  "MidiCh_16": {
    "low": 0,
    "high": 16,
    "def": 0,
    "defin": [
      "0 ~ ch1, 1 ~ ch 2, 2 ~ ch3, 3 ~ ch4, 4 ~ ch5, 5 ~ ch6, 6 ~ ch7, 7 ~ ch8, 8 ~ ch9, 9 ~ ch10, 10 ~ ch11, 11 ~ ch12, 12 ~ ch13, 13 ~ ch14, 14 ~ ch15, 15 ~ ch16, 16 ~ This"
    ],
    "comments": ""
  },
  "MidiCh_17": {
    "low": 0,
    "high": 17,
    "def": 0,
    "defin": [
      "0 ~ ch1, 1 ~ ch2, 2 ~ ch3, 3 ~ ch4, 4 ~ ch5, 5 ~ ch6, 6 ~ ch7, 7 ~ ch8, 8 ~ ch9, 9 ~ ch10, 10 ~ ch11, 11 ~ ch12, 12 ~ ch13, 13 ~ ch14, 14 ~ ch15, 15 ~ ch16, 16 ~ This, 17 ~ keyb"
    ],
    "comments": ""
  },
  "NoteZoneThru": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Notes Only, 1 ~ Note+Ctrls"
    ],
    "comments": ""
  },
  "Threshold_42": {
    "low": 0,
    "high": 42,
    "def": 18,
    "defin": [
      "0 ~ -30 dB, 18 ~ -12 dB, 42 ~ Off"
    ],
    "comments": ""
  },
  "CompressorRatio": {
    "low": 0,
    "high": 66,
    "def": 20,
    "defin": [
      "0 ~ 1.0:1, 20 ~ 4.0:1, 66 ~ 80:1"
    ],
    "comments": ""
  },
  "CompressorAttack": {
    "low": 0,
    "high": 127,
    "def": 1,
    "defin": [
      "0 ~ Fast, 1 ~ 0.53 m, 64 ~ 20.2 m, 127 ~ 767 m"
    ],
    "comments": ""
  },
  "CompressorRelease": {
    "low": 0,
    "high": 127,
    "def": 20,
    "defin": [
      "0 ~ 125 m, 20 ~ 250 m, 64 ~ 1.15 s, 127 ~ 10.2 s"
    ],
    "comments": ""
  },
  "CompressorRefLevel": {
    "low": 0,
    "high": 42,
    "def": 30,
    "defin": [
      "0 ~ -30 dB, 30 ~ 0 dB, 42 ~ 12 dB"
    ],
    "comments": ""
  },
  "KeyQuantCapture": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Closest, 1 ~ Evenly"
    ],
    "comments": ""
  },
  "SeqCtrlXFade": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Off, 1 ~ 25%, 2 ~ 50%, 3 ~ 100%"
    ],
    "comments": ""
  },
  "BipPosNeg": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Bip, 1 ~ Pos, 2 ~ Neg"
    ],
    "comments": ""
  },
  "GlideTime": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 0.2 m, 64 ~ 511 m, 127 ~ 22.4s",
      "0 ~ 0.2 ms/Oct, 64 ~ 480 ms/Oct, 127 ~ 23.5 s/Oct"
    ],
    "comments": "Log, Lin. Determined by the Shape parameter =[LogLin])"
  },
  "Freq_1": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 8.1758 Hz, 64 ~ 329.63 Hz, 127 ~ 12.55 kHz"
    ],
    "comments": ""
  },
  "CombType": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Notch, 1 ~ Peak, 2 ~ Deep"
    ],
    "comments": ""
  },
  "OscShpA_Waveform": {
    "low": 0,
    "high": 5,
    "def": 0,
    "defin": [
      "0 ~ Sine1, 1 ~ Sine2, 2 ~ Sine3, 3 ~ Sine4, 4 ~ TriSaw, 5 ~ SymPulse"
    ],
    "comments": ""
  },
  "DxAlgorithm": {
    "low": 0,
    "high": 31,
    "def": 0,
    "defin": [
      "0 ~ 1, 31 ~ 32"
    ],
    "comments": ""
  },
  "DxFeedback": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ 0, 1 ~ 1, 2 ~ 2, 3 ~ 3, 4 ~ 4, 5 ~ 5, 6 ~ 6, 7 ~ 7"
    ],
    "comments": ""
  },
  "PShiftCoarse": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "1 ~ -16.0, 64 ~ +0.0, 127 ~ +15.8"
    ],
    "comments": "Semitones"
  },
  "PShiftFine": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "1 ~ -50, 64 ~ +0, 127 ~ +49.2"
    ],
    "comments": "Cents ?"
  },
  "Source_2": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ In 1/2, 1 ~ In 3/4, 2 ~ Bus 1/2, 3 ~ Bus 3/4"
    ],
    "comments": ""
  },
  "Source_3": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ In, 1 ~ Bus"
    ],
    "comments": ""
  },
  "DelayTime_3": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.01 m, 64 ~ 2.68 m, 127 ~ 5.30 m",
      "0 ~ 0.01 m, 64 ~ 12.7 m, 127 ~ 25.1 m",
      "0 ~ 0.01 m, 64 ~ 50.7 m, 127 ~ 101 m",
      "0 ~ 0.01 m, 64 ~ 252 m, 127 ~ 500 m",
      "0 ~ 0.01 m, 64 ~ 504 m, 127 ~ 1.000 s",
      "0 ~ 0.01 m, 64 ~ 1.008 s, 127 ~ 2.000 s",
      "0 ~ 0.01 m, 64 ~ 1.361 s, 127 ~ 2.700 s",
      "0 ~ 1/64 T, 64 ~ 1/4 T, 127 ~ 2/1"
    ],
    "comments": "Time=5ms, 25ms, 100ms, 500ms, 1.0s, 2.0s, 2.7s), Clk. Determined by [DelayRange_3] and [TimeClk] =if present)"
  },
  "DelayRange_3": {
    "low": 0,
    "high": 6,
    "def": 0,
    "defin": [
      "0 ~ 5 m, 1 ~ 25 m, 2 ~ 100 m, 3 ~ 500 m, 4 ~ 1.0 s, 5 ~ 2.0 s, 6 ~ 2.7 s"
    ],
    "comments": "Determines [DelayTime_3]"
  },
  "TimeClk": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Time, 1 ~ Clk"
    ],
    "comments": ""
  },
  "DelayTime_2": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.01 m, 64 ~ 252 m, 127 ~ 500 m",
      "0 ~ 0.01 m, 64 ~ 504 m, 127 ~ 1.000 s",
      "0 ~ 0.01 m, 64 ~ 1.008 s, 127 ~ 2.000 s",
      "0 ~ 0.01 m, 64 ~ 1.361 s, 127 ~ 2.700 s",
      "0 ~ 1/64 T, 64 ~ 1/4 T, 127 ~ 2/1"
    ],
    "comments": "Time=500 ms, 1.0 s, 2.0 s, 2.7 s), Clk. Determined by [DelayRange_2] and by [TimeClk] =if present)"
  },
  "DelayRange_2": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ 500 m, 1 ~ 1.0 s, 2 ~ 2.0 s, 3 ~ 2.7 s"
    ],
    "comments": "Possibly determines [DelayTime_1], [DelayTime_2] and [DelayTime_3]"
  },
  "RatioFixed": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Ratio, 1 ~ Fixed"
    ],
    "comments": ""
  },
  "OpFreqCoarse": {
    "low": 0,
    "high": 31,
    "def": 0,
    "defin": [
      "0 ~ 0, 31 ~ 31"
    ],
    "comments": ""
  },
  "OpFreqFine": {
    "low": 0,
    "high": 99,
    "def": 0,
    "defin": [
      "0 ~ 0, 99 ~ 99"
    ],
    "comments": ""
  },
  "OpFreqDetune": {
    "low": 0,
    "high": 14,
    "def": 0,
    "defin": [
      "0 ~ -7, 7 ~ 0, 14 ~ 7"
    ],
    "comments": ""
  },
  "OpVel": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ 0, 7 ~ 7"
    ],
    "comments": ""
  },
  "OpRateScale": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ 0, 7 ~ 7"
    ],
    "comments": ""
  },
  "OpTime": {
    "low": 0,
    "high": 99,
    "def": 0,
    "defin": [
      "0 ~ 0, 99 ~ 99"
    ],
    "comments": ""
  },
  "OpLevel": {
    "low": 0,
    "high": 99,
    "def": 0,
    "defin": [
      "0 ~ 0, 99 ~ 99"
    ],
    "comments": ""
  },
  "OpAmod": {
    "low": 0,
    "high": 7,
    "def": 0,
    "defin": [
      "0 ~ 0, 7 ~ 7"
    ],
    "comments": ""
  },
  "OpBrPpoint": {
    "low": 0,
    "high": 99,
    "def": 0,
    "defin": [
      "0 ~ 0, 99 ~ 99"
    ],
    "comments": ""
  },
  "OpDepthMode": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ 0, 3 ~ 3"
    ],
    "comments": ""
  },
  "OpDepth": {
    "low": 0,
    "high": 99,
    "def": 0,
    "defin": [
      "0 ~ 0, 99 ~ 99"
    ],
    "comments": ""
  },
  "DelayTime_1": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.01 m, 64 ~ 252 m, 127 ~ 500 m",
      "0 ~ 0.01 m, 64 ~ 504 m, 127 ~ 1.000 s",
      "0 ~ 0.01 m, 64 ~ 661 ms, 127 ~ 1.351 s",
      "0 ~ 1/64 T, 64 ~ 1/4 T, 127 ~ 2/1"
    ],
    "comments": "Time=500 ms, 1.0 s, 1.35 s), Clk. Determined by [DelayRange_1] and by [TimeClk] =if present)"
  },
  "DelayRange_1": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ 500 m, 1 ~ 1.0 s, 2 ~ 2.0 s, 3 ~ 1.35 s"
    ],
    "comments": "Determines [DelayTime_1]"
  },
  "OscWaveform_1": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ Tri"
    ],
    "comments": ""
  },
  "Threshold_127": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ -{00}, 64 ~ -6.0 dB, 127 ~ -0 dB"
    ],
    "comments": ""
  },
  "NoiseGateAttack": {
    "low": 0,
    "high": 127,
    "def": 0,
    "defin": [
      "0 ~ 0.2 m, 64 ~ 28.0 m, 127 ~ 100 m"
    ],
    "comments": ""
  },
  "NoiseGateRelease": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 0.50 m, 64 ~ 86.4 m, 127 ~ 1.00 s"
    ],
    "comments": ""
  },
  "LfoB_Waveform": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ Sine, 1 ~ Tri, 2 ~ Saw, 3 ~ Square"
    ],
    "comments": ""
  },
  "PhaserType": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Type I, 1 ~ Type II"
    ],
    "comments": ""
  },
  "PhaserFreq": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ 0.05 Hz, 64 ~ 2.98 Hz, 127 ~ 11.6 Hz"
    ],
    "comments": ""
  },
  "ExpLin_1": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Exp, 1 ~ Lin"
    ],
    "comments": ""
  },
  "ModAmtInvert": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ m, 1 ~ 1-m"
    ],
    "comments": ""
  },
  "MonoKeyMode": {
    "low": 0,
    "high": 2,
    "def": 0,
    "defin": [
      "0 ~ Last, 1 ~ Lo, 2 ~ Hi"
    ],
    "comments": ""
  },
  "RndEdge": {
    "low": 0,
    "high": 4,
    "def": 0,
    "defin": [
      "0 ~ 0%, 1 ~ 25%, 2 ~ 50%, 3 ~ 75%, 4 ~ 100%"
    ],
    "comments": ""
  },
  "RandomAStepProb": {
    "low": 0,
    "high": 3,
    "def": 0,
    "defin": [
      "0 ~ 25%, 1 ~ 50%, 2 ~ 75%, 3 ~ 100%"
    ],
    "comments": ""
  },
  "Rnd_1": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Rnd1, 1 ~ Rnd2"
    ],
    "comments": ""
  },
  "RangeBip_128": {
    "low": 0,
    "high": 127,
    "def": 64,
    "defin": [
      "0 ~ -64, 64 ~ 0, 126 ~ 62, 127 ~ 64"
    ],
    "comments": ""
  },
  "RndStepPulse": {
    "low": 0,
    "high": 1,
    "def": 0,
    "defin": [
      "0 ~ Step, 1 ~ Pulse"
    ],
    "comments": ""
  }
};


modules = [
  {
    "id": 1,
    "height": 2,
    "longnm": "Keyboard",
    "shortnm": "Keyboard",
    "page": {
      "name": "In/Out",
      "ord": 5
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Pitch",
        "colour": "blue"
      },
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "Lin",
        "colour": "blue"
      },
      {
        "name": "Release",
        "colour": "blue"
      },
      {
        "name": "Note",
        "colour": "blue"
      },
      {
        "name": "Exp",
        "colour": "blue"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 3,
    "height": 2,
    "longnm": "4 outputs",
    "shortnm": "4-Out",
    "page": {
      "name": "In/Out",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "red"
      },
      {
        "name": "In2",
        "colour": "red"
      },
      {
        "name": "In3",
        "colour": "red"
      },
      {
        "name": "In4",
        "colour": "red"
      }
    ],
    "outputs": [],
    "params": [
      {
        "name": "Destination",
        "type": "Dst_2"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Pad",
        "type": "Pad_1"
      }
    ],
    "modes": []
  },
  {
    "id": 4,
    "height": 2,
    "longnm": "2 outputs",
    "shortnm": "2-Out",
    "page": {
      "name": "In/Out",
      "ord": 0
    },
    "inputs": [
      {
        "name": "InL",
        "colour": "red"
      },
      {
        "name": "InR",
        "colour": "red"
      }
    ],
    "outputs": [],
    "params": [
      {
        "name": "Destination",
        "type": "Dst_1"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Pad",
        "type": "Pad_1"
      }
    ],
    "modes": []
  },
  {
    "id": 5,
    "height": 2,
    "longnm": "Logic Inverter",
    "shortnm": "Invert",
    "page": {
      "name": "Logic",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "orange"
      },
      {
        "name": "In2",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "orange"
      },
      {
        "name": "Out2",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 7,
    "height": 5,
    "longnm": "Osc B",
    "shortnm": "OscB",
    "page": {
      "name": "Osc",
      "ord": 1
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Sync",
        "colour": "red"
      },
      {
        "name": "FmMod",
        "colour": "red"
      },
      {
        "name": "ShapeMod",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "FmAmount",
        "type": "Level_100"
      },
      {
        "name": "Shape",
        "type": "PW"
      },
      {
        "name": "ShapeMod",
        "type": "Level_100"
      },
      {
        "name": "Waveform",
        "type": "OscBWaveform"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "FmMode",
        "type": "FmLinTrk"
      }
    ],
    "modes": []
  },
  {
    "id": 8,
    "height": 4,
    "longnm": "Osc Shape B",
    "shortnm": "OscShpB",
    "page": {
      "name": "Osc",
      "ord": 6
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Sync",
        "colour": "red"
      },
      {
        "name": "FmMod",
        "colour": "red"
      },
      {
        "name": "ShapeMod",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "FmAmount",
        "type": "Level_100"
      },
      {
        "name": "Shape",
        "type": "PW"
      },
      {
        "name": "ShapeMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "FmMode",
        "type": "FmLinTrk"
      }
    ],
    "modes": [
      {
        "name": "Waveform",
        "type": "OscWaveform_3"
      }
    ]
  },
  {
    "id": 9,
    "height": 3,
    "longnm": "Osc C",
    "shortnm": "OscC",
    "page": {
      "name": "Osc",
      "ord": 2
    },
    "inputs": [
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Sync",
        "colour": "red"
      },
      {
        "name": "FmMod",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "FmAmount",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "FmMode",
        "type": "FmLinTrk"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "Waveform",
        "type": "OscWaveform_2"
      }
    ]
  },
  {
    "id": 12,
    "height": 3,
    "longnm": "reverb",
    "shortnm": "Reverb",
    "page": {
      "name": "FX",
      "ord": 7
    },
    "inputs": [
      {
        "name": "InL",
        "colour": "red"
      },
      {
        "name": "InR",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "red"
      },
      {
        "name": "OutR",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "ReverbTime"
      },
      {
        "name": "Brightness",
        "type": "Level_100"
      },
      {
        "name": "DryWet",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": [
      {
        "name": "RoomType",
        "type": "RoomType"
      }
    ]
  },
  {
    "id": 13,
    "height": 3,
    "longnm": "Osc String",
    "shortnm": "OscString",
    "page": {
      "name": "Osc",
      "ord": 13
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "blue"
      },
      {
        "name": "PitchVar",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "Decay",
        "type": "Level_100"
      },
      {
        "name": "Moisture",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 15,
    "height": 4,
    "longnm": "Switch 8-1",
    "shortnm": "Sw8-1",
    "page": {
      "name": "Switch",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      },
      {
        "name": "In7",
        "colour": "purple"
      },
      {
        "name": "In8",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Control",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "sw_3"
      }
    ],
    "modes": []
  },
  {
    "id": 17,
    "height": 2,
    "longnm": "Value Switch 1-2",
    "shortnm": "ValSw1-2",
    "page": {
      "name": "Switch",
      "ord": 11
    },
    "inputs": [
      {
        "name": "Input",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "OutOn",
        "colour": "purple"
      },
      {
        "name": "OutOff",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Val",
        "type": "ValSwVal"
      }
    ],
    "modes": []
  },
  {
    "id": 18,
    "height": 2,
    "longnm": "Cross Fader",
    "shortnm": "X-Fade",
    "page": {
      "name": "Mixer",
      "ord": 13
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "MixMod",
        "type": "Level_100"
      },
      {
        "name": "Mix",
        "type": "Bipolar_127"
      },
      {
        "name": "LogLin",
        "type": "LogLin"
      }
    ],
    "modes": []
  },
  {
    "id": 19,
    "height": 2,
    "longnm": "Mixer 4-1 B",
    "shortnm": "Mix4-1B",
    "page": {
      "name": "Mixer",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "Lev3",
        "type": "MixLevel"
      },
      {
        "name": "Lev4",
        "type": "MixLevel"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 20,
    "height": 4,
    "longnm": "Envelop ADSR",
    "shortnm": "EnvADSR",
    "page": {
      "name": "Env",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "AM",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Shape",
        "type": "EnvShape_3"
      },
      {
        "name": "Attack",
        "type": "EnvTime"
      },
      {
        "name": "Decay",
        "type": "EnvTime"
      },
      {
        "name": "Sustain",
        "type": "EnvLevel"
      },
      {
        "name": "Release",
        "type": "EnvTime"
      },
      {
        "name": "OutputType",
        "type": "PosNegInvBipInv"
      },
      {
        "name": "KB",
        "type": "OffOn"
      },
      {
        "name": "NR",
        "type": "EnvNR"
      }
    ],
    "modes": []
  },
  {
    "id": 21,
    "height": 2,
    "longnm": "Multiplexer 1-8",
    "shortnm": "Mux1-8",
    "page": {
      "name": "Switch",
      "ord": 14
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "purple"
      },
      {
        "name": "Out2",
        "colour": "purple"
      },
      {
        "name": "Out3",
        "colour": "purple"
      },
      {
        "name": "Out4",
        "colour": "purple"
      },
      {
        "name": "Out5",
        "colour": "purple"
      },
      {
        "name": "Out6",
        "colour": "purple"
      },
      {
        "name": "Out7",
        "colour": "purple"
      },
      {
        "name": "Out8",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 22,
    "height": 2,
    "longnm": "Partial Quantizer",
    "shortnm": "PartQuant",
    "page": {
      "name": "Note",
      "ord": 2
    },
    "inputs": [
      {
        "name": "In",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Range",
        "type": "PartialRange"
      }
    ],
    "modes": []
  },
  {
    "id": 23,
    "height": 5,
    "longnm": "Envelope Modulation ADSR",
    "shortnm": "ModADSR",
    "page": {
      "name": "Env",
      "ord": 8
    },
    "inputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "AttackMod",
        "colour": "blue"
      },
      {
        "name": "DecayMod",
        "colour": "blue"
      },
      {
        "name": "SustainMod",
        "colour": "blue"
      },
      {
        "name": "ReleaseMod",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "AM",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Attack",
        "type": "EnvTime"
      },
      {
        "name": "Decay",
        "type": "EnvTime"
      },
      {
        "name": "Sustain",
        "type": "EnvLevel"
      },
      {
        "name": "Release",
        "type": "EnvTime"
      },
      {
        "name": "AttackMod",
        "type": "Level_100"
      },
      {
        "name": "DecayMod",
        "type": "Level_100"
      },
      {
        "name": "SustainMod",
        "type": "Level_100"
      },
      {
        "name": "ReleaseMod",
        "type": "Level_100"
      },
      {
        "name": "OutputType",
        "type": "PosNegInvBipInv"
      },
      {
        "name": "KB",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 24,
    "height": 2,
    "longnm": "LFO C",
    "shortnm": "LfoC",
    "page": {
      "name": "LFO",
      "ord": 2
    },
    "inputs": [
      {
        "name": "Rate",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "LfoRate_3"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "OutputType",
        "type": "OutTypeLfo"
      },
      {
        "name": "Range",
        "type": "LfoRange_3"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": [
      {
        "name": "Waveform",
        "type": "LfoWaveform_1"
      }
    ]
  },
  {
    "id": 25,
    "height": 5,
    "longnm": "LFO Shape A",
    "shortnm": "LfoShpA",
    "page": {
      "name": "LFO",
      "ord": 3
    },
    "inputs": [
      {
        "name": "Rate",
        "colour": "blue"
      },
      {
        "name": "RateVar",
        "colour": "blue"
      },
      {
        "name": "Rst",
        "colour": "blue"
      },
      {
        "name": "ShapeMod",
        "colour": "blue"
      },
      {
        "name": "PhaseMod",
        "colour": "blue"
      },
      {
        "name": "Dir",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      },
      {
        "name": "Snc",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "LfoRate_4"
      },
      {
        "name": "Range",
        "type": "LfoRange_4"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "RateMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Shape",
        "type": "LfoShpAPW"
      },
      {
        "name": "PhaseMod",
        "type": "Level_100"
      },
      {
        "name": "Phase",
        "type": "Phase"
      },
      {
        "name": "ShapeMod",
        "type": "Level_100"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "OutputType",
        "type": "OutTypeLfo"
      },
      {
        "name": "Waveform",
        "type": "LfoShpA__Waveform"
      }
    ],
    "modes": []
  },
  {
    "id": 26,
    "height": 3,
    "longnm": "LFO A",
    "shortnm": "LfoA",
    "page": {
      "name": "LFO",
      "ord": 0
    },
    "inputs": [
      {
        "name": "Rate",
        "colour": "blue"
      },
      {
        "name": "RateVar",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "LfoRate_3"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "RateMod",
        "type": "Level_100"
      },
      {
        "name": "Waveform",
        "type": "LfoA_Waveform"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "OutputType",
        "type": "OutTypeLfo"
      },
      {
        "name": "Range",
        "type": "LfoRange_3"
      }
    ],
    "modes": []
  },
  {
    "id": 27,
    "height": 3,
    "longnm": "Osc Master",
    "shortnm": "OscMaster",
    "page": {
      "name": "Osc",
      "ord": 16
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_2"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 28,
    "height": 2,
    "longnm": "Saturate",
    "shortnm": "Saturate",
    "page": {
      "name": "Shaper",
      "ord": 2
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Amount",
        "type": "Level_100"
      },
      {
        "name": "AmountMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Curve",
        "type": "SaturateCurve"
      }
    ],
    "modes": []
  },
  {
    "id": 29,
    "height": 2,
    "longnm": "Metallic Noise Oscillator",
    "shortnm": "MetNoise",
    "page": {
      "name": "Osc",
      "ord": 10
    },
    "inputs": [
      {
        "name": "FreqMod",
        "colour": "purple"
      },
      {
        "name": "ColorMod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Color",
        "type": "Level_100"
      },
      {
        "name": "Freq",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "FreqMod",
        "type": "Level_100"
      },
      {
        "name": "ColorMod",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 30,
    "height": 3,
    "longnm": "Device",
    "shortnm": "Device",
    "page": {
      "name": "In/Out",
      "ord": 7
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Wheel",
        "colour": "blue"
      },
      {
        "name": "AftTouch",
        "colour": "blue"
      },
      {
        "name": "ControlPedal",
        "colour": "blue"
      },
      {
        "name": "SustainPedal",
        "colour": "yellow"
      },
      {
        "name": "PitchStick",
        "colour": "blue"
      },
      {
        "name": "GlobalWheel1",
        "colour": "blue"
      },
      {
        "name": "GlobalWheel2",
        "colour": "blue"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 31,
    "height": 2,
    "longnm": "Noise",
    "shortnm": "Noise",
    "page": {
      "name": "Osc",
      "ord": 9
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Color",
        "type": "NoiseColor"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 32,
    "height": 3,
    "longnm": "Eq 2 Band",
    "shortnm": "Eq2Band",
    "page": {
      "name": "Filter",
      "ord": 12
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "LoSlope",
        "type": "EqdB"
      },
      {
        "name": "HiSlope",
        "type": "EqdB"
      },
      {
        "name": "Level",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "LoFreq",
        "type": "EqLoFreq"
      },
      {
        "name": "HiFreq",
        "type": "EqHiFreq"
      }
    ],
    "modes": []
  },
  {
    "id": 33,
    "height": 4,
    "longnm": "Eq 3 Band",
    "shortnm": "Eq3Band",
    "page": {
      "name": "Filter",
      "ord": 13
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "LoSlope",
        "type": "EqdB"
      },
      {
        "name": "MidGain",
        "type": "EqdB"
      },
      {
        "name": "MidFreq",
        "type": "EqMidFreq"
      },
      {
        "name": "HiSlope",
        "type": "EqdB"
      },
      {
        "name": "Level",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "LoFreq",
        "type": "EqLoFreq"
      },
      {
        "name": "HiFreq",
        "type": "EqHiFreq"
      }
    ],
    "modes": []
  },
  {
    "id": 34,
    "height": 2,
    "longnm": "Shape Exp",
    "shortnm": "ShpExp",
    "page": {
      "name": "Shaper",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Amount",
        "type": "Level_100"
      },
      {
        "name": "AmountMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Curve",
        "type": "ShpExpCurve"
      }
    ],
    "modes": []
  },
  {
    "id": 36,
    "height": 2,
    "longnm": "Switch On/Off Momentary",
    "shortnm": "SwOnOffM",
    "page": {
      "name": "Switch",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "On",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 38,
    "height": 2,
    "longnm": "Pulse",
    "shortnm": "Pulse",
    "page": {
      "name": "Logic",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "orange"
      },
      {
        "name": "Time",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "LogicTime"
      },
      {
        "name": "TimeMod",
        "type": "Level_100"
      },
      {
        "name": "Range",
        "type": "LogicRange"
      }
    ],
    "modes": [
      {
        "name": "Mode",
        "type": "PulseMode"
      }
    ]
  },
  {
    "id": 40,
    "height": 4,
    "longnm": "Mixer 8-1 B",
    "shortnm": "Mix8-1B",
    "page": {
      "name": "Mixer",
      "ord": 9
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      },
      {
        "name": "In7",
        "colour": "purple"
      },
      {
        "name": "In8",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "Lev3",
        "type": "MixLevel"
      },
      {
        "name": "Lev4",
        "type": "MixLevel"
      },
      {
        "name": "Lev5",
        "type": "MixLevel"
      },
      {
        "name": "Lev6",
        "type": "MixLevel"
      },
      {
        "name": "Lev7",
        "type": "MixLevel"
      },
      {
        "name": "Lev8",
        "type": "MixLevel"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      },
      {
        "name": "Pad",
        "type": "Pad_3"
      }
    ],
    "modes": []
  },
  {
    "id": 41,
    "height": 2,
    "longnm": "Envelope Hold",
    "shortnm": "EnvH",
    "page": {
      "name": "Env",
      "ord": 1
    },
    "inputs": [
      {
        "name": "Trig",
        "colour": "yellow"
      },
      {
        "name": "AM",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Hold",
        "type": "EnvTime"
      },
      {
        "name": "OutputType",
        "type": "PosNegInv"
      }
    ],
    "modes": []
  },
  {
    "id": 42,
    "height": 2,
    "longnm": "Logic Delay",
    "shortnm": "Delay",
    "page": {
      "name": "Logic",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "orange"
      },
      {
        "name": "TimeMod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "LogicTime"
      },
      {
        "name": "TimeMod",
        "type": "Level_100"
      },
      {
        "name": "Range",
        "type": "LogicRange"
      }
    ],
    "modes": [
      {
        "name": "Mode",
        "type": "LogicDelayMode"
      }
    ]
  },
  {
    "id": 43,
    "height": 2,
    "longnm": "Constant Value",
    "shortnm": "Constant",
    "page": {
      "name": "Level",
      "ord": 0
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Level",
        "type": "LevBipUni"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      }
    ],
    "modes": []
  },
  {
    "id": 44,
    "height": 2,
    "longnm": "Level Multiplier",
    "shortnm": "LevMult",
    "page": {
      "name": "Level",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 45,
    "height": 4,
    "longnm": "Filter Voice",
    "shortnm": "FltVoice",
    "page": {
      "name": "Filter",
      "ord": 9
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "VowelMod",
        "colour": "blue"
      },
      {
        "name": "FreqMod",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Vowel1",
        "type": "Vowel"
      },
      {
        "name": "Vowel2",
        "type": "Vowel"
      },
      {
        "name": "Vowel3",
        "type": "Vowel"
      },
      {
        "name": "Level",
        "type": "Level_100"
      },
      {
        "name": "Vowel",
        "type": "Level_100"
      },
      {
        "name": "VowelMod",
        "type": "Bipolar_127"
      },
      {
        "name": "Freq",
        "type": "Level_100"
      },
      {
        "name": "FreqMod",
        "type": "Bipolar_127"
      },
      {
        "name": "Res",
        "type": "Bipolar_127"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 46,
    "height": 4,
    "longnm": "Envelope AHD",
    "shortnm": "EnvAHD",
    "page": {
      "name": "Env",
      "ord": 4
    },
    "inputs": [
      {
        "name": "Trig",
        "colour": "yellow"
      },
      {
        "name": "AM",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Shape",
        "type": "EnvShape_3"
      },
      {
        "name": "Attack",
        "type": "EnvTime"
      },
      {
        "name": "Hold",
        "type": "EnvTime"
      },
      {
        "name": "NR",
        "type": "EnvNR"
      },
      {
        "name": "Decay",
        "type": "EnvTime"
      },
      {
        "name": "OutputType",
        "type": "PosNegInv"
      },
      {
        "name": "KB",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 47,
    "height": 2,
    "longnm": "Pan",
    "shortnm": "Pan",
    "page": {
      "name": "Mixer",
      "ord": 12
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "purple"
      },
      {
        "name": "OutR",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "PanMod",
        "type": "Level_100"
      },
      {
        "name": "Pan",
        "type": "Bipolar_127"
      },
      {
        "name": "LogLin",
        "type": "LogLin"
      }
    ],
    "modes": []
  },
  {
    "id": 48,
    "height": 5,
    "longnm": "Mixer Stereo",
    "shortnm": "MixStereo",
    "page": {
      "name": "Mixer",
      "ord": 11
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "purple"
      },
      {
        "name": "OutR",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "Level_100"
      },
      {
        "name": "Lev2",
        "type": "Level_100"
      },
      {
        "name": "Lev3",
        "type": "Level_100"
      },
      {
        "name": "Lev4",
        "type": "Level_100"
      },
      {
        "name": "Lev5",
        "type": "Level_100"
      },
      {
        "name": "Lev6",
        "type": "Level_100"
      },
      {
        "name": "Pan1",
        "type": "Bipolar_127"
      },
      {
        "name": "Pan2",
        "type": "Bipolar_127"
      },
      {
        "name": "Pan3",
        "type": "Bipolar_127"
      },
      {
        "name": "Pan4",
        "type": "Bipolar_127"
      },
      {
        "name": "Pan5",
        "type": "Bipolar_127"
      },
      {
        "name": "Pan6",
        "type": "Bipolar_127"
      },
      {
        "name": "LevMaster",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 49,
    "height": 4,
    "longnm": "Filter Multi-mode",
    "shortnm": "FltMulti",
    "page": {
      "name": "Filter",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "LP",
        "colour": "red"
      },
      {
        "name": "BP",
        "colour": "red"
      },
      {
        "name": "HP",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "FltFreq"
      },
      {
        "name": "PitchMod",
        "type": "Level_200"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "GC",
        "type": "GcOffOn"
      },
      {
        "name": "Res",
        "type": "Res_1"
      },
      {
        "name": "Slope",
        "type": "FltSlope_1"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 50,
    "height": 2,
    "longnm": "Constant Switch Toggling",
    "shortnm": "ConstSwT",
    "page": {
      "name": "Level",
      "ord": 2
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Lev",
        "type": "LevBipUni"
      },
      {
        "name": "On",
        "type": "OffOn"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      }
    ],
    "modes": []
  },
  {
    "id": 51,
    "height": 5,
    "longnm": "Filter Nord",
    "shortnm": "FltNord",
    "page": {
      "name": "Filter",
      "ord": 2
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "FMLin",
        "colour": "purple"
      },
      {
        "name": "Res",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "FltFreq"
      },
      {
        "name": "PitchMod",
        "type": "Level_200"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "GC",
        "type": "GcOffOn"
      },
      {
        "name": "Res",
        "type": "Res_1"
      },
      {
        "name": "Slope",
        "type": "FltSlope_2"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "FM_Lin",
        "type": "Level_100"
      },
      {
        "name": "FilterType",
        "type": "LpBpHpBr"
      },
      {
        "name": "ResMod",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 52,
    "height": 6,
    "longnm": "Envelope Multi",
    "shortnm": "EnvMulti",
    "page": {
      "name": "Env",
      "ord": 6
    },
    "inputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "AM",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Level1",
        "type": "EnvLevel"
      },
      {
        "name": "Level2",
        "type": "EnvLevel"
      },
      {
        "name": "Level3",
        "type": "EnvLevel"
      },
      {
        "name": "Level4",
        "type": "EnvLevel"
      },
      {
        "name": "Time1",
        "type": "EnvTime"
      },
      {
        "name": "Time2",
        "type": "EnvTime"
      },
      {
        "name": "Time3",
        "type": "EnvTime"
      },
      {
        "name": "Time4",
        "type": "EnvTime"
      },
      {
        "name": "NR",
        "type": "EnvNR"
      },
      {
        "name": "SustainMode",
        "type": "SustainMode_2"
      },
      {
        "name": "OutputType",
        "type": "PosNegInvBip"
      },
      {
        "name": "KB",
        "type": "OffOn"
      },
      {
        "name": "Shape",
        "type": "EnvShape_3"
      }
    ],
    "modes": []
  },
  {
    "id": 53,
    "height": 2,
    "longnm": "Sample & Hold",
    "shortnm": "S&H",
    "page": {
      "name": "Switch",
      "ord": 16
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 54,
    "height": 3,
    "longnm": "Filter Static",
    "shortnm": "FltStatic",
    "page": {
      "name": "Filter",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "FltFreq"
      },
      {
        "name": "Res",
        "type": "Res_1"
      },
      {
        "name": "FilterType",
        "type": "LpBpHp"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "GC",
        "type": "GcOffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 55,
    "height": 2,
    "longnm": "Envelope Decay",
    "shortnm": "EnvD",
    "page": {
      "name": "Env",
      "ord": 2
    },
    "inputs": [
      {
        "name": "Trig",
        "colour": "yellow"
      },
      {
        "name": "AM",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Decay",
        "type": "EnvTime"
      },
      {
        "name": "OutputType",
        "type": "PosNegInv"
      }
    ],
    "modes": []
  },
  {
    "id": 57,
    "height": 2,
    "longnm": "MIDI Control Automate",
    "shortnm": "Automate",
    "page": {
      "name": "MIDI",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "yellow"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "yellow"
      }
    ],
    "params": [
      {
        "name": "Ctrl",
        "type": "MidiData"
      },
      {
        "name": "Val",
        "type": "MidiData"
      },
      {
        "name": "Ch",
        "type": "MidiCh_20"
      },
      {
        "name": "Echo",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 58,
    "height": 8,
    "longnm": "Drum Synthesizer",
    "shortnm": "DrumSynth",
    "page": {
      "name": "Osc",
      "ord": 12
    },
    "inputs": [
      {
        "name": "Trig",
        "colour": "yellow"
      },
      {
        "name": "Vel",
        "colour": "blue"
      },
      {
        "name": "Pitch",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Masterfreq",
        "type": "DrumSynthFreq"
      },
      {
        "name": "SlaveRatio",
        "type": "DrumSynthRatio"
      },
      {
        "name": "MasterDecay",
        "type": "EnvTime"
      },
      {
        "name": "SlaveDecay",
        "type": "EnvTime"
      },
      {
        "name": "MasterLevel",
        "type": "Level_100"
      },
      {
        "name": "SlaveLevel",
        "type": "Level_100"
      },
      {
        "name": "NoiseFltFreq",
        "type": "DrumSynthNoiseFlt"
      },
      {
        "name": "NoiseFltRes",
        "type": "Level_100"
      },
      {
        "name": "NoiseFltSweep",
        "type": "Level_100"
      },
      {
        "name": "NoiseFltDecay",
        "type": "EnvTime"
      },
      {
        "name": "NoiseFltMode",
        "type": "LpBpHp"
      },
      {
        "name": "BendAmount",
        "type": "Level_100"
      },
      {
        "name": "BendDecay",
        "type": "EnvTime"
      },
      {
        "name": "Click",
        "type": "Level_100"
      },
      {
        "name": "Noise",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 59,
    "height": 2,
    "longnm": "Compare to Level",
    "shortnm": "CompLev",
    "page": {
      "name": "Level",
      "ord": 10
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "C",
        "type": "Bipolar_127"
      }
    ],
    "modes": []
  },
  {
    "id": 60,
    "height": 3,
    "longnm": "Multiplexer 8-1 with variable X-Fade",
    "shortnm": "Mux8-1X",
    "page": {
      "name": "Switch",
      "ord": 15
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      },
      {
        "name": "In7",
        "colour": "purple"
      },
      {
        "name": "In8",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "XFade",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 61,
    "height": 2,
    "longnm": "Clip",
    "shortnm": "Clip",
    "page": {
      "name": "Shaper",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "ClipLevMod",
        "type": "Level_100"
      },
      {
        "name": "ClipLev",
        "type": "Level_100"
      },
      {
        "name": "Shape",
        "type": "ClipShape"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 62,
    "height": 2,
    "longnm": "Overdrive",
    "shortnm": "Overdrive",
    "page": {
      "name": "Shaper",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "AmountMod",
        "type": "Level_100"
      },
      {
        "name": "Amount",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Type",
        "type": "OverdriveType"
      },
      {
        "name": "Shape",
        "type": "ClipShape"
      }
    ],
    "modes": []
  },
  {
    "id": 63,
    "height": 3,
    "longnm": "Scratch",
    "shortnm": "Scratch",
    "page": {
      "name": "FX",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Mod",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Ratio",
        "type": "ScratchRatio"
      },
      {
        "name": "RatioMod",
        "type": "Level_100"
      },
      {
        "name": "Delay",
        "type": "ScratchDelay"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 64,
    "height": 2,
    "longnm": "Gate",
    "shortnm": "Gate",
    "page": {
      "name": "Logic",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In1_1",
        "colour": "orange"
      },
      {
        "name": "In1_2",
        "colour": "orange"
      },
      {
        "name": "In2_1",
        "colour": "orange"
      },
      {
        "name": "In2_2",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "orange"
      },
      {
        "name": "Out2",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": [
      {
        "name": "GateMode1",
        "type": "GateMode"
      },
      {
        "name": "GateMode2",
        "type": "GateMode"
      }
    ]
  },
  {
    "id": 66,
    "height": 2,
    "longnm": "Scratch",
    "shortnm": "Mix2-1B",
    "page": {
      "name": "Mixer",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Inv1",
        "type": "MixInvert"
      },
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "Inv2",
        "type": "MixInvert"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 68,
    "height": 4,
    "longnm": "Clock Generator",
    "shortnm": "ClkGen",
    "page": {
      "name": "LFO",
      "ord": 4
    },
    "inputs": [
      {
        "name": "Rst",
        "colour": "yellow"
      }
    ],
    "outputs": [
      {
        "name": "1/96",
        "colour": "yellow"
      },
      {
        "name": "1/16",
        "colour": "yellow"
      },
      {
        "name": "ClkActive",
        "colour": "yellow"
      },
      {
        "name": "Sync",
        "colour": "yellow"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "RateBpm"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Source",
        "type": "InternalMaster"
      },
      {
        "name": "BeatSync",
        "type": "ClkGenBeatSync"
      },
      {
        "name": "Swing",
        "type": "ClkGenSwing"
      }
    ],
    "modes": []
  },
  {
    "id": 69,
    "height": 2,
    "longnm": "Clock Divider",
    "shortnm": "ClkDiv",
    "page": {
      "name": "Logic",
      "ord": 3
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Divider",
        "type": "Range_128"
      }
    ],
    "modes": [
      {
        "name": "DivMode",
        "type": "ClkDivMode"
      }
    ]
  },
  {
    "id": 71,
    "height": 2,
    "longnm": "Envelope Follower",
    "shortnm": "EnvFollow",
    "page": {
      "name": "Level",
      "ord": 8
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Attack",
        "type": "EnvFollowAttack"
      },
      {
        "name": "Release",
        "type": "EnvFollowRelease"
      }
    ],
    "modes": []
  },
  {
    "id": 72,
    "height": 2,
    "longnm": "Note Scaler",
    "shortnm": "NoteScaler",
    "page": {
      "name": "Note",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Range",
        "type": "NoteRange"
      }
    ],
    "modes": []
  },
  {
    "id": 74,
    "height": 2,
    "longnm": "Wave Wrapper",
    "shortnm": "WaveWrap",
    "page": {
      "name": "Shaper",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "AmountMod",
        "type": "Level_100"
      },
      {
        "name": "Amount",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 75,
    "height": 2,
    "longnm": "Note Quantizer",
    "shortnm": "NoteQuant",
    "page": {
      "name": "Note",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Range",
        "type": "NoteRange"
      },
      {
        "name": "Notes",
        "type": "NoteQuantNotes"
      }
    ],
    "modes": []
  },
  {
    "id": 76,
    "height": 2,
    "longnm": "Switch On/Off Toggle",
    "shortnm": "SwOnOffT",
    "page": {
      "name": "Switch",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "On",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 78,
    "height": 4,
    "longnm": "Switch 1-8",
    "shortnm": "Sw1-8",
    "page": {
      "name": "Switch",
      "ord": 9
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "purple"
      },
      {
        "name": "Out2",
        "colour": "purple"
      },
      {
        "name": "Out3",
        "colour": "purple"
      },
      {
        "name": "Out4",
        "colour": "purple"
      },
      {
        "name": "Out5",
        "colour": "purple"
      },
      {
        "name": "Out6",
        "colour": "purple"
      },
      {
        "name": "Out7",
        "colour": "purple"
      },
      {
        "name": "Out8",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "sw_3"
      }
    ],
    "modes": []
  },
  {
    "id": 79,
    "height": 3,
    "longnm": "Switch 4-1",
    "shortnm": "Sw4-1",
    "page": {
      "name": "Switch",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "sw_2"
      }
    ],
    "modes": []
  },
  {
    "id": 81,
    "height": 2,
    "longnm": "Level Amplifier",
    "shortnm": "LevAmp",
    "page": {
      "name": "Level",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Gain",
        "type": "LevAmpGain"
      },
      {
        "name": "Type",
        "type": "LinDB"
      }
    ],
    "modes": []
  },
  {
    "id": 82,
    "height": 2,
    "longnm": "Rectifier",
    "shortnm": "Rect",
    "page": {
      "name": "Shaper",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Mode",
        "type": "RectMode"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 83,
    "height": 2,
    "longnm": "Shape Static",
    "shortnm": "ShpStatic",
    "page": {
      "name": "Shaper",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Mode",
        "type": "ShpStaticMode"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 84,
    "height": 3,
    "longnm": "Envelope ADR",
    "shortnm": "EnvADR",
    "page": {
      "name": "Env",
      "ord": 3
    },
    "inputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "AM",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "End",
        "colour": "yellow"
      }
    ],
    "params": [
      {
        "name": "Shape",
        "type": "EnvShape_3"
      },
      {
        "name": "Attack",
        "type": "EnvTime"
      },
      {
        "name": "NR",
        "type": "EnvNR"
      },
      {
        "name": "Release",
        "type": "EnvTime"
      },
      {
        "name": "TG",
        "type": "TrigGate"
      },
      {
        "name": "OutputType",
        "type": "PosNegInv"
      },
      {
        "name": "KB",
        "type": "OffOn"
      },
      {
        "name": "DcyRel",
        "type": "AdAr"
      }
    ],
    "modes": []
  },
  {
    "id": 85,
    "height": 2,
    "longnm": "Window Switch",
    "shortnm": "WindSw",
    "page": {
      "name": "Switch",
      "ord": 12
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Gate",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "ValFrom",
        "type": "Range_64"
      },
      {
        "name": "ValTo",
        "type": "Range_64"
      }
    ],
    "modes": []
  },
  {
    "id": 86,
    "height": 2,
    "longnm": "8 Counter",
    "shortnm": "8Counter",
    "page": {
      "name": "Logic",
      "ord": 6
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "orange"
      },
      {
        "name": "Out2",
        "colour": "orange"
      },
      {
        "name": "Out3",
        "colour": "orange"
      },
      {
        "name": "Out4",
        "colour": "orange"
      },
      {
        "name": "Out5",
        "colour": "orange"
      },
      {
        "name": "Out6",
        "colour": "orange"
      },
      {
        "name": "Out7",
        "colour": "orange"
      },
      {
        "name": "Out8",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 87,
    "height": 2,
    "longnm": "Filter Lowpass",
    "shortnm": "FltLP",
    "page": {
      "name": "Filter",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "FltFreq"
      },
      {
        "name": "FreqMod",
        "type": "Level_100"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": [
      {
        "name": "SlopeMode",
        "type": "HpLpSlopeMode"
      }
    ]
  },
  {
    "id": 88,
    "height": 3,
    "longnm": "Switch 1-4",
    "shortnm": "Sw1-4",
    "page": {
      "name": "Switch",
      "ord": 8
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "purple"
      },
      {
        "name": "Out2",
        "colour": "purple"
      },
      {
        "name": "Out3",
        "colour": "purple"
      },
      {
        "name": "Out4",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "sw_2"
      }
    ],
    "modes": []
  },
  {
    "id": 89,
    "height": 3,
    "longnm": "Flanger",
    "shortnm": "Flanger",
    "page": {
      "name": "FX",
      "ord": 2
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "FlangerRate"
      },
      {
        "name": "Range",
        "type": "Level_100"
      },
      {
        "name": "FeedBack",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 90,
    "height": 2,
    "longnm": "Switch 1-2",
    "shortnm": "Sw1-2",
    "page": {
      "name": "Switch",
      "ord": 7
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out2",
        "colour": "purple"
      },
      {
        "name": "Out1",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "Sw_1"
      }
    ],
    "modes": []
  },
  {
    "id": 91,
    "height": 2,
    "longnm": "Flip Flop",
    "shortnm": "FlipFlop",
    "page": {
      "name": "Logic",
      "ord": 2
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "In",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "NotQ",
        "colour": "orange"
      },
      {
        "name": "Q",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": [
      {
        "name": "OperationMode",
        "type": "FlipFlopMode"
      }
    ]
  },
  {
    "id": 92,
    "height": 4,
    "longnm": "Filter Classic",
    "shortnm": "FltClassic",
    "page": {
      "name": "Filter",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "FltFreq"
      },
      {
        "name": "PitchMod",
        "type": "Level_200"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "Res",
        "type": "Level_100"
      },
      {
        "name": "Slope",
        "type": "ClassicSlope"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 94,
    "height": 3,
    "longnm": "Stereo Chorus",
    "shortnm": "StChorus",
    "page": {
      "name": "FX",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "red"
      },
      {
        "name": "OutR",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Detune",
        "type": "Level_100"
      },
      {
        "name": "Amount",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 96,
    "height": 2,
    "longnm": "Osc D",
    "shortnm": "OscD",
    "page": {
      "name": "Osc",
      "ord": 3
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": [
      {
        "name": "Waveform",
        "type": "OscWaveform_2"
      }
    ]
  },
  {
    "id": 97,
    "height": 3,
    "longnm": "Osc A",
    "shortnm": "OscA",
    "page": {
      "name": "Osc",
      "ord": 0
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "Waveform",
        "type": "OscA_Waveform"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      }
    ],
    "modes": []
  },
  {
    "id": 98,
    "height": 3,
    "longnm": "Frequency Shifter",
    "shortnm": "FreqShift",
    "page": {
      "name": "FX",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Shift",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Dn",
        "colour": "red"
      },
      {
        "name": "Up",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqShift",
        "type": "FreqShiftFreq"
      },
      {
        "name": "ShiftMod",
        "type": "Level_100"
      },
      {
        "name": "Range",
        "type": "FreqShiftRange"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 100,
    "height": 2,
    "longnm": "Switch 2-1",
    "shortnm": "Sw2-1",
    "page": {
      "name": "Switch",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "Sw_1"
      }
    ],
    "modes": []
  },
  {
    "id": 102,
    "height": 5,
    "longnm": "Filter Phase",
    "shortnm": "FltPhase",
    "page": {
      "name": "Filter",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Spr",
        "colour": "blue"
      },
      {
        "name": "FB",
        "colour": "blue"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "Freq",
        "type": "Freq_2"
      },
      {
        "name": "SpreadMod",
        "type": "Level_100"
      },
      {
        "name": "FB",
        "type": "Bipolar_127"
      },
      {
        "name": "NotchCount",
        "type": "FltPhaseNotchCount"
      },
      {
        "name": "Spread",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Level",
        "type": "Level_100"
      },
      {
        "name": "FBMod",
        "type": "Level_100"
      },
      {
        "name": "Type",
        "type": "FltPhaseType"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      }
    ],
    "modes": []
  },
  {
    "id": 103,
    "height": 4,
    "longnm": "Eq Peak",
    "shortnm": "EqPeak",
    "page": {
      "name": "Filter",
      "ord": 11
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "Freq_3"
      },
      {
        "name": "Gain",
        "type": "EqdB"
      },
      {
        "name": "Bandwidth",
        "type": "EqPeakBandwidth"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Level",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 105,
    "height": 2,
    "longnm": "Value Switch 2-1",
    "shortnm": "ValSw2-1",
    "page": {
      "name": "Switch",
      "ord": 10
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Val",
        "type": "ValSwVal"
      }
    ],
    "modes": []
  },
  {
    "id": 106,
    "height": 3,
    "longnm": "Oscillator Noise",
    "shortnm": "OscNoise",
    "page": {
      "name": "Osc",
      "ord": 8
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Width",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "Width",
        "type": "Level_100"
      },
      {
        "name": "WidthMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 108,
    "height": 8,
    "longnm": "Vocoder",
    "shortnm": "Vocoder",
    "page": {
      "name": "Filter",
      "ord": 10
    },
    "inputs": [
      {
        "name": "Ctrl",
        "colour": "red"
      },
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Band1",
        "type": "VocoderBand"
      },
      {
        "name": "Band2",
        "type": "VocoderBand"
      },
      {
        "name": "Band3",
        "type": "VocoderBand"
      },
      {
        "name": "Band4",
        "type": "VocoderBand"
      },
      {
        "name": "Band5",
        "type": "VocoderBand"
      },
      {
        "name": "Band6",
        "type": "VocoderBand"
      },
      {
        "name": "Band7",
        "type": "VocoderBand"
      },
      {
        "name": "Band8",
        "type": "VocoderBand"
      },
      {
        "name": "Band9",
        "type": "VocoderBand"
      },
      {
        "name": "Band10",
        "type": "VocoderBand"
      },
      {
        "name": "Band11",
        "type": "VocoderBand"
      },
      {
        "name": "Band12",
        "type": "VocoderBand"
      },
      {
        "name": "Band13",
        "type": "VocoderBand"
      },
      {
        "name": "Band14",
        "type": "VocoderBand"
      },
      {
        "name": "Band15",
        "type": "VocoderBand"
      },
      {
        "name": "Band16",
        "type": "VocoderBand"
      },
      {
        "name": "Emphasis",
        "type": "OffOn"
      },
      {
        "name": "Monitor",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 112,
    "height": 2,
    "longnm": "Level Add",
    "shortnm": "LevAdd",
    "page": {
      "name": "Level",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Level",
        "type": "LevBipUni"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      }
    ],
    "modes": []
  },
  {
    "id": 113,
    "height": 2,
    "longnm": "Fade 1-2",
    "shortnm": "Fade1-2",
    "page": {
      "name": "Mixer",
      "ord": 14
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "purple"
      },
      {
        "name": "Out2",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Mix",
        "type": "Fade12Mix"
      },
      {
        "name": "MixMod",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 114,
    "height": 2,
    "longnm": "Fade 2-1",
    "shortnm": "Fade2-1",
    "page": {
      "name": "Mixer",
      "ord": 15
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Mix",
        "type": "Fade21Mix"
      },
      {
        "name": "MixMod",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 115,
    "height": 3,
    "longnm": "Level Scaler",
    "shortnm": "LevScaler",
    "page": {
      "name": "Note",
      "ord": 7
    },
    "inputs": [
      {
        "name": "Note",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Level",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "L",
        "type": "LevScaledB"
      },
      {
        "name": "BP",
        "type": "FreqCoarse"
      },
      {
        "name": "R",
        "type": "LevScaledB"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      }
    ],
    "modes": []
  },
  {
    "id": 116,
    "height": 2,
    "longnm": "Mix 8-1 A",
    "shortnm": "Mix8-1A",
    "page": {
      "name": "Mixer",
      "ord": 8
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      },
      {
        "name": "In7",
        "colour": "purple"
      },
      {
        "name": "In8",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Pad",
        "type": "Pad_3"
      }
    ],
    "modes": []
  },
  {
    "id": 117,
    "height": 3,
    "longnm": "Level Modulator",
    "shortnm": "LevMod",
    "page": {
      "name": "Level",
      "ord": 7
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      },
      {
        "name": "ModDepth",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "ModDepth",
        "type": "Level_100"
      },
      {
        "name": "ModType",
        "type": "LevModAmRm"
      }
    ],
    "modes": []
  },
  {
    "id": 118,
    "height": 3,
    "longnm": "Digitizer",
    "shortnm": "Digitizer",
    "page": {
      "name": "FX",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Rate",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Bits",
        "type": "DigitizerBits"
      },
      {
        "name": "Rate",
        "type": "DigitizerRate"
      },
      {
        "name": "RateMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 119,
    "height": 5,
    "longnm": "Envelope ADDSR",
    "shortnm": "EnvADDSR",
    "page": {
      "name": "Env",
      "ord": 5
    },
    "inputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "AM",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "KB",
        "type": "OffOn"
      },
      {
        "name": "Shape",
        "type": "EnvShape_3"
      },
      {
        "name": "Attack",
        "type": "EnvTime"
      },
      {
        "name": "Decay1",
        "type": "EnvTime"
      },
      {
        "name": "Level1",
        "type": "EnvLevel"
      },
      {
        "name": "Decay2",
        "type": "EnvTime"
      },
      {
        "name": "Level2",
        "type": "EnvLevel"
      },
      {
        "name": "Release",
        "type": "EnvTime"
      },
      {
        "name": "SustainMode",
        "type": "SustainMode_1"
      },
      {
        "name": "OutputType",
        "type": "PosNegInvBipInv"
      },
      {
        "name": "NR",
        "type": "EnvNR"
      }
    ],
    "modes": []
  },
  {
    "id": 121,
    "height": 9,
    "longnm": "Sequencer Note",
    "shortnm": "SeqNote",
    "page": {
      "name": "Seq",
      "ord": 3
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      },
      {
        "name": "Loop",
        "colour": "orange"
      },
      {
        "name": "Park",
        "colour": "orange"
      },
      {
        "name": "Note",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      },
      {
        "name": "RecVal",
        "colour": "purple"
      },
      {
        "name": "RecEnable",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Link",
        "colour": "orange"
      },
      {
        "name": "Note",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Seq1Step1",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step2",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step3",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step4",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step5",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step6",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step7",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step8",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step9",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step10",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step11",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step12",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step13",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step14",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step15",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq1Step16",
        "type": "FreqCoarse"
      },
      {
        "name": "Seq2Step1",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step2",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step3",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step4",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step5",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step6",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step7",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step8",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step9",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step10",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step11",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step12",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step13",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step14",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step15",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step16",
        "type": "OffOn"
      },
      {
        "name": "Loop",
        "type": "LoopOnce"
      },
      {
        "name": "Length",
        "type": "SeqLen"
      },
      {
        "name": "TG",
        "type": "TrigGate"
      },
      {
        "name": "Clr_Or_Rnd",
        "type": "OffOn"
      },
      {
        "name": "Rnd_Or_Clr",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 123,
    "height": 4,
    "longnm": "Mixer 4-1 C",
    "shortnm": "Mix4-1C",
    "page": {
      "name": "Mixer",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "Lev3",
        "type": "MixLevel"
      },
      {
        "name": "Lev4",
        "type": "MixLevel"
      },
      {
        "name": "On1",
        "type": "OffOn"
      },
      {
        "name": "On2",
        "type": "OffOn"
      },
      {
        "name": "On3",
        "type": "OffOn"
      },
      {
        "name": "On4",
        "type": "OffOn"
      },
      {
        "name": "Pad",
        "type": "Pad_2"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 124,
    "height": 2,
    "longnm": "Multiplexer 8-1",
    "shortnm": "Mux8-1",
    "page": {
      "name": "Switch",
      "ord": 13
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      },
      {
        "name": "In7",
        "colour": "purple"
      },
      {
        "name": "In8",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 125,
    "height": 2,
    "longnm": "Wah-Wah",
    "shortnm": "WahWah",
    "page": {
      "name": "Filter",
      "ord": 8
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Sweep",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "SweepMod",
        "type": "Level_100"
      },
      {
        "name": "Sweep",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 126,
    "height": 1,
    "longnm": "Name Bar",
    "shortnm": "Name",
    "page": {
      "name": "In/Out",
      "ord": 10
    },
    "inputs": [],
    "outputs": [],
    "params": [],
    "modes": []
  },
  {
    "id": 127,
    "height": 2,
    "longnm": "Fx Input",
    "shortnm": "Fx-In",
    "page": {
      "name": "In/Out",
      "ord": 4
    },
    "inputs": [],
    "outputs": [
      {
        "name": "OutL",
        "colour": "red"
      },
      {
        "name": "OutR",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Source",
        "type": "Source_1"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Pad",
        "type": "Pad_4"
      }
    ],
    "modes": []
  },
  {
    "id": 128,
    "height": 2,
    "longnm": "Min/Max Compare",
    "shortnm": "MinMax",
    "page": {
      "name": "Level",
      "ord": 12
    },
    "inputs": [
      {
        "name": "A",
        "colour": "purple"
      },
      {
        "name": "B",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Min",
        "colour": "purple"
      },
      {
        "name": "Max",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 130,
    "height": 2,
    "longnm": "Binary Counter",
    "shortnm": "BinCounter",
    "page": {
      "name": "Logic",
      "ord": 7
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out001",
        "colour": "orange"
      },
      {
        "name": "Out002",
        "colour": "orange"
      },
      {
        "name": "Out004",
        "colour": "orange"
      },
      {
        "name": "Out008",
        "colour": "orange"
      },
      {
        "name": "Out016",
        "colour": "orange"
      },
      {
        "name": "Out032",
        "colour": "orange"
      },
      {
        "name": "Out064",
        "colour": "orange"
      },
      {
        "name": "Out128",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 131,
    "height": 2,
    "longnm": "A/D Converter",
    "shortnm": "ADConv",
    "page": {
      "name": "Logic",
      "ord": 8
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "D0",
        "colour": "orange"
      },
      {
        "name": "D1",
        "colour": "orange"
      },
      {
        "name": "D2",
        "colour": "orange"
      },
      {
        "name": "D3",
        "colour": "orange"
      },
      {
        "name": "D4",
        "colour": "orange"
      },
      {
        "name": "D5",
        "colour": "orange"
      },
      {
        "name": "D6",
        "colour": "orange"
      },
      {
        "name": "D7",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 132,
    "height": 2,
    "longnm": "D/A Converter",
    "shortnm": "DAConv",
    "page": {
      "name": "Logic",
      "ord": 9
    },
    "inputs": [
      {
        "name": "D0",
        "colour": "orange"
      },
      {
        "name": "D1",
        "colour": "orange"
      },
      {
        "name": "D2",
        "colour": "orange"
      },
      {
        "name": "D3",
        "colour": "orange"
      },
      {
        "name": "D4",
        "colour": "orange"
      },
      {
        "name": "D5",
        "colour": "orange"
      },
      {
        "name": "D6",
        "colour": "orange"
      },
      {
        "name": "D7",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 134,
    "height": 2,
    "longnm": "Filter Highpass",
    "shortnm": "FltHP",
    "page": {
      "name": "Filter",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "FltFreq"
      },
      {
        "name": "FreqMod",
        "type": "Level_100"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": [
      {
        "name": "SlopeMode",
        "type": "HpLpSlopeMode"
      }
    ]
  },
  {
    "id": 139,
    "height": 2,
    "longnm": "Track & Hold",
    "shortnm": "T&H",
    "page": {
      "name": "Switch",
      "ord": 17
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 140,
    "height": 4,
    "longnm": "Mixer 4-1 Stereo",
    "shortnm": "Mix4-1S",
    "page": {
      "name": "Mixer",
      "ord": 7
    },
    "inputs": [
      {
        "name": "In1L",
        "colour": "purple"
      },
      {
        "name": "In1R",
        "colour": "purple"
      },
      {
        "name": "In2L",
        "colour": "purple"
      },
      {
        "name": "In2R",
        "colour": "purple"
      },
      {
        "name": "In3L",
        "colour": "purple"
      },
      {
        "name": "In3R",
        "colour": "purple"
      },
      {
        "name": "In4L",
        "colour": "purple"
      },
      {
        "name": "In4R",
        "colour": "purple"
      },
      {
        "name": "ChainL",
        "colour": "purple"
      },
      {
        "name": "ChainR",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "purple"
      },
      {
        "name": "OutR",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "Lev3",
        "type": "MixLevel"
      },
      {
        "name": "Lev4",
        "type": "MixLevel"
      },
      {
        "name": "On1",
        "type": "OffOn"
      },
      {
        "name": "On2",
        "type": "OffOn"
      },
      {
        "name": "On3",
        "type": "OffOn"
      },
      {
        "name": "On4",
        "type": "OffOn"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 141,
    "height": 2,
    "longnm": "MIDI Control Send",
    "shortnm": "CtrlSend",
    "page": {
      "name": "MIDI",
      "ord": 0
    },
    "inputs": [
      {
        "name": "Send",
        "colour": "yellow"
      },
      {
        "name": "Value",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Send",
        "colour": "yellow"
      }
    ],
    "params": [
      {
        "name": "Ctrl",
        "type": "MidiData"
      },
      {
        "name": "Val",
        "type": "MidiData"
      },
      {
        "name": "Ch",
        "type": "MidiCh_20"
      }
    ],
    "modes": []
  },
  {
    "id": 142,
    "height": 2,
    "longnm": "MIDI Program Change Send",
    "shortnm": "PCSend",
    "page": {
      "name": "MIDI",
      "ord": 1
    },
    "inputs": [
      {
        "name": "Send",
        "colour": "yellow"
      },
      {
        "name": "Program",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Send",
        "colour": "yellow"
      }
    ],
    "params": [
      {
        "name": "Program",
        "type": "MidiData"
      },
      {
        "name": "Ch",
        "type": "MidiCh_16"
      }
    ],
    "modes": []
  },
  {
    "id": 143,
    "height": 2,
    "longnm": "MIDI Note Send",
    "shortnm": "NoteSend",
    "page": {
      "name": "MIDI",
      "ord": 2
    },
    "inputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "Vel",
        "colour": "blue"
      },
      {
        "name": "Note",
        "colour": "blue"
      }
    ],
    "outputs": [],
    "params": [
      {
        "name": "Vel",
        "type": "MidiData"
      },
      {
        "name": "Note",
        "type": "MidiData"
      },
      {
        "name": "Ch",
        "type": "MidiCh_20"
      }
    ],
    "modes": []
  },
  {
    "id": 144,
    "height": 5,
    "longnm": "Seq Event",
    "shortnm": "SeqEvent",
    "page": {
      "name": "Seq",
      "ord": 0
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "yellow"
      },
      {
        "name": "Loop",
        "colour": "yellow"
      },
      {
        "name": "Park",
        "colour": "yellow"
      },
      {
        "name": "Trig1",
        "colour": "yellow"
      },
      {
        "name": "Trig2",
        "colour": "yellow"
      }
    ],
    "outputs": [
      {
        "name": "Link",
        "colour": "yellow"
      },
      {
        "name": "Trig1",
        "colour": "orange"
      },
      {
        "name": "Trig2",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Seq1Step1",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step2",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step3",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step4",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step5",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step6",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step7",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step8",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step9",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step10",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step11",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step12",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step13",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step14",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step15",
        "type": "OffOn"
      },
      {
        "name": "Seq1Step16",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step1",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step2",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step3",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step4",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step5",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step6",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step7",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step8",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step9",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step10",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step11",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step12",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step13",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step14",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step15",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step16",
        "type": "OffOn"
      },
      {
        "name": "Loop",
        "type": "LoopOnce"
      },
      {
        "name": "Length",
        "type": "SeqLen"
      },
      {
        "name": "TG1",
        "type": "TrigGate"
      },
      {
        "name": "TG2",
        "type": "TrigGate"
      }
    ],
    "modes": []
  },
  {
    "id": 145,
    "height": 8,
    "longnm": "Sequencer Values",
    "shortnm": "SeqVal",
    "page": {
      "name": "Seq",
      "ord": 1
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "yellow"
      },
      {
        "name": "Loop",
        "colour": "yellow"
      },
      {
        "name": "Park",
        "colour": "yellow"
      },
      {
        "name": "Val",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "yellow"
      }
    ],
    "outputs": [
      {
        "name": "Link",
        "colour": "yellow"
      },
      {
        "name": "Val",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Seq1Step1",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step2",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step3",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step4",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step5",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step6",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step7",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step8",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step9",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step10",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step11",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step12",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step13",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step14",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step15",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step16",
        "type": "LevBipUni"
      },
      {
        "name": "Seq2Step1",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step2",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step3",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step4",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step5",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step6",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step7",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step8",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step9",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step10",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step11",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step12",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step13",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step14",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step15",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step16",
        "type": "OffOn"
      },
      {
        "name": "Loop",
        "type": "LoopOnce"
      },
      {
        "name": "Length",
        "type": "SeqLen"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      },
      {
        "name": "TG",
        "type": "TrigGate"
      },
      {
        "name": "Clr_Or_Rnd",
        "type": "OffOn"
      },
      {
        "name": "Rnd_Or_Clr",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 146,
    "height": 8,
    "longnm": "Sequencer Level",
    "shortnm": "SeqLev",
    "page": {
      "name": "Seq",
      "ord": 2
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      },
      {
        "name": "Loop",
        "colour": "orange"
      },
      {
        "name": "Park",
        "colour": "orange"
      },
      {
        "name": "Val",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Link",
        "colour": "orange"
      },
      {
        "name": "Val",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Seq1Step1",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step2",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step3",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step4",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step5",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step6",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step7",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step8",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step9",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step10",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step11",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step12",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step13",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step14",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step15",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step16",
        "type": "LevBipUni"
      },
      {
        "name": "Seq2Step1",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step2",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step3",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step4",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step5",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step6",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step7",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step8",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step9",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step10",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step11",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step12",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step13",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step14",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step15",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step16",
        "type": "OffOn"
      },
      {
        "name": "Loop",
        "type": "LoopOnce"
      },
      {
        "name": "Length",
        "type": "SeqLen"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      },
      {
        "name": "TG",
        "type": "TrigGate"
      },
      {
        "name": "Clr_Or_Rnd",
        "type": "OffOn"
      },
      {
        "name": "Rnd_Or_Clr",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 147,
    "height": 2,
    "longnm": "MIDI Control Receive",
    "shortnm": "CtrlRcv",
    "page": {
      "name": "MIDI",
      "ord": 3
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Rcv",
        "colour": "yellow"
      },
      {
        "name": "Val",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Ctrl",
        "type": "MidiData"
      },
      {
        "name": "Ch",
        "type": "MidiCh_16"
      }
    ],
    "modes": []
  },
  {
    "id": 148,
    "height": 2,
    "longnm": "MIDI Note Receive",
    "shortnm": "NoteRcv",
    "page": {
      "name": "MIDI",
      "ord": 4
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "Vel",
        "colour": "blue"
      },
      {
        "name": "RelVel",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Note",
        "type": "MidiData"
      },
      {
        "name": "Ch",
        "type": "MidiCh_17"
      }
    ],
    "modes": []
  },
  {
    "id": 149,
    "height": 3,
    "longnm": "MIDI Note Zone",
    "shortnm": "NoteZone",
    "page": {
      "name": "MIDI",
      "ord": 5
    },
    "inputs": [],
    "outputs": [],
    "params": [
      {
        "name": "RcvCh",
        "type": "MidiCh_17"
      },
      {
        "name": "RcvMin",
        "type": "MidiData"
      },
      {
        "name": "RcvMax",
        "type": "MidiData"
      },
      {
        "name": "SendTrans",
        "type": "Bipolar_127"
      },
      {
        "name": "SendCh",
        "type": "MidiCh_20"
      },
      {
        "name": "ThruMode",
        "type": "NoteZoneThru"
      }
    ],
    "modes": []
  },
  {
    "id": 150,
    "height": 5,
    "longnm": "Compressor",
    "shortnm": "Compressor",
    "page": {
      "name": "FX",
      "ord": 8
    },
    "inputs": [
      {
        "name": "InL",
        "colour": "red"
      },
      {
        "name": "InR",
        "colour": "red"
      },
      {
        "name": "SideChain",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "OutR",
        "colour": "red"
      },
      {
        "name": "OutL",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Threshold",
        "type": "Threshold_42"
      },
      {
        "name": "Ratio",
        "type": "CompressorRatio"
      },
      {
        "name": "Attack",
        "type": "CompressorAttack"
      },
      {
        "name": "Release",
        "type": "CompressorRelease"
      },
      {
        "name": "RefLevel",
        "type": "CompressorRefLevel"
      },
      {
        "name": "SideChain",
        "type": "OffOn"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 152,
    "height": 2,
    "longnm": "Key Quantizer",
    "shortnm": "KeyQuant",
    "page": {
      "name": "Note",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Range",
        "type": "NoteRange"
      },
      {
        "name": "Capture",
        "type": "KeyQuantCapture"
      },
      {
        "name": "E",
        "type": "OffOn"
      },
      {
        "name": "F",
        "type": "OffOn"
      },
      {
        "name": "F#",
        "type": "OffOn"
      },
      {
        "name": "G",
        "type": "OffOn"
      },
      {
        "name": "G#",
        "type": "OffOn"
      },
      {
        "name": "A",
        "type": "OffOn"
      },
      {
        "name": "A#",
        "type": "OffOn"
      },
      {
        "name": "B",
        "type": "OffOn"
      },
      {
        "name": "C",
        "type": "OffOn"
      },
      {
        "name": "C#",
        "type": "OffOn"
      },
      {
        "name": "D",
        "type": "OffOn"
      },
      {
        "name": "D#",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 154,
    "height": 8,
    "longnm": "Sequencer Controlled",
    "shortnm": "SeqCtr",
    "page": {
      "name": "Seq",
      "ord": 4
    },
    "inputs": [
      {
        "name": "Ctrl",
        "colour": "purple"
      },
      {
        "name": "Val",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Val",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "Seq1Step1",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step2",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step3",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step4",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step5",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step6",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step7",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step8",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step9",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step10",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step11",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step12",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step13",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step14",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step15",
        "type": "LevBipUni"
      },
      {
        "name": "Seq1Step16",
        "type": "LevBipUni"
      },
      {
        "name": "Seq2Step1",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step2",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step3",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step4",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step5",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step6",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step7",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step8",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step9",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step10",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step11",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step12",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step13",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step14",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step15",
        "type": "OffOn"
      },
      {
        "name": "Seq2Step16",
        "type": "OffOn"
      },
      {
        "name": "TG",
        "type": "TrigGate"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      },
      {
        "name": "XFade",
        "type": "SeqCtrlXFade"
      },
      {
        "name": "Clr_Or_Rnd",
        "type": "OffOn"
      },
      {
        "name": "Rnd_Or_Clr",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 156,
    "height": 2,
    "longnm": "Note Detector",
    "shortnm": "NoteDet",
    "page": {
      "name": "In/Out",
      "ord": 9
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "Vel",
        "colour": "blue"
      },
      {
        "name": "RelVel",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Note",
        "type": "FreqCoarse"
      }
    ],
    "modes": []
  },
  {
    "id": 157,
    "height": 2,
    "longnm": "Level Converter",
    "shortnm": "LevConv",
    "page": {
      "name": "Level",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "OutputType",
        "type": "PosNegInvBipInv"
      },
      {
        "name": "InputType",
        "type": "BipPosNeg"
      }
    ],
    "modes": []
  },
  {
    "id": 158,
    "height": 2,
    "longnm": "Glide",
    "shortnm": "Glide",
    "page": {
      "name": "Note",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "On",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "GlideTime"
      },
      {
        "name": "Glide",
        "type": "OffOn"
      },
      {
        "name": "Shape",
        "type": "LogLin"
      }
    ],
    "modes": []
  },
  {
    "id": 159,
    "height": 2,
    "longnm": "Compare to Signal",
    "shortnm": "CompSig",
    "page": {
      "name": "Level",
      "ord": 11
    },
    "inputs": [
      {
        "name": "A",
        "colour": "purple"
      },
      {
        "name": "B",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "orange"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 160,
    "height": 2,
    "longnm": "Zero Crossing Counter",
    "shortnm": "ZeroCnt",
    "page": {
      "name": "Note",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 161,
    "height": 9,
    "longnm": "Mixer 8-1 Fader",
    "shortnm": "MixFader",
    "page": {
      "name": "Mixer",
      "ord": 10
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      },
      {
        "name": "In5",
        "colour": "purple"
      },
      {
        "name": "In6",
        "colour": "purple"
      },
      {
        "name": "In7",
        "colour": "purple"
      },
      {
        "name": "In8",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "Lev3",
        "type": "MixLevel"
      },
      {
        "name": "Lev4",
        "type": "MixLevel"
      },
      {
        "name": "Lev5",
        "type": "MixLevel"
      },
      {
        "name": "Lev6",
        "type": "MixLevel"
      },
      {
        "name": "Lev7",
        "type": "MixLevel"
      },
      {
        "name": "Lev8",
        "type": "MixLevel"
      },
      {
        "name": "On1",
        "type": "OffOn"
      },
      {
        "name": "On2",
        "type": "OffOn"
      },
      {
        "name": "On3",
        "type": "OffOn"
      },
      {
        "name": "On4",
        "type": "OffOn"
      },
      {
        "name": "On5",
        "type": "OffOn"
      },
      {
        "name": "On6",
        "type": "OffOn"
      },
      {
        "name": "On7",
        "type": "OffOn"
      },
      {
        "name": "On8",
        "type": "OffOn"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      },
      {
        "name": "Pad",
        "type": "Pad_3"
      }
    ],
    "modes": []
  },
  {
    "id": 162,
    "height": 4,
    "longnm": "Filter Comb",
    "shortnm": "FltComb",
    "page": {
      "name": "Filter",
      "ord": 7
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "FB",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Freq",
        "type": "Freq_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "FB",
        "type": "Bipolar_127"
      },
      {
        "name": "FBMod",
        "type": "Level_100"
      },
      {
        "name": "Type",
        "type": "CombType"
      },
      {
        "name": "Lev",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 163,
    "height": 5,
    "longnm": "Osc Shape A",
    "shortnm": "OscShpA",
    "page": {
      "name": "Osc",
      "ord": 5
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Sync",
        "colour": "red"
      },
      {
        "name": "FmMod",
        "colour": "red"
      },
      {
        "name": "ShapeMod",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "FmAmount",
        "type": "Level_100"
      },
      {
        "name": "FmMode",
        "type": "FmLinTrk"
      },
      {
        "name": "Shape",
        "type": "PW"
      },
      {
        "name": "ShapeMod",
        "type": "Level_100"
      },
      {
        "name": "Waveform",
        "type": "OscShpA_Waveform"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 164,
    "height": 5,
    "longnm": "Osc Dual",
    "shortnm": "OscDual",
    "page": {
      "name": "Osc",
      "ord": 7
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Sync",
        "colour": "red"
      },
      {
        "name": "PW",
        "colour": "red"
      },
      {
        "name": "Phase",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "SqrLevel",
        "type": "Level_100"
      },
      {
        "name": "PWMod",
        "type": "Level_100"
      },
      {
        "name": "SawLevel",
        "type": "Level_100"
      },
      {
        "name": "SawPhase",
        "type": "Phase"
      },
      {
        "name": "SubOctLevel",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "SqrPW",
        "type": "PW"
      },
      {
        "name": "PhaseMod",
        "type": "Level_100"
      },
      {
        "name": "Soft",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 165,
    "height": 6,
    "longnm": "DX Style Router",
    "shortnm": "DXRouter",
    "page": {
      "name": "Osc",
      "ord": 15
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "red"
      },
      {
        "name": "In2",
        "colour": "red"
      },
      {
        "name": "In3",
        "colour": "red"
      },
      {
        "name": "In4",
        "colour": "red"
      },
      {
        "name": "In5",
        "colour": "red"
      },
      {
        "name": "In6",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "red"
      },
      {
        "name": "Out2",
        "colour": "red"
      },
      {
        "name": "Out3",
        "colour": "red"
      },
      {
        "name": "Out4",
        "colour": "red"
      },
      {
        "name": "Out5",
        "colour": "red"
      },
      {
        "name": "Out6",
        "colour": "red"
      },
      {
        "name": "Main",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Algorithm",
        "type": "DxAlgorithm"
      },
      {
        "name": "Feedback",
        "type": "DxFeedback"
      }
    ],
    "modes": []
  },
  {
    "id": 167,
    "height": 3,
    "longnm": "Pitch Shifter",
    "shortnm": "PShift",
    "page": {
      "name": "FX",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "ShiftSemi",
        "type": "PShiftCoarse"
      },
      {
        "name": "ShiftFine",
        "type": "PShiftFine"
      },
      {
        "name": "ShiftMod",
        "type": "Level_100"
      },
      {
        "name": "Delay",
        "type": "ScratchDelay"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 169,
    "height": 5,
    "longnm": "Envelope Modulation AHD",
    "shortnm": "ModAHD",
    "page": {
      "name": "Env",
      "ord": 7
    },
    "inputs": [
      {
        "name": "Trig",
        "colour": "yellow"
      },
      {
        "name": "AttackMod",
        "colour": "blue"
      },
      {
        "name": "HoldMod",
        "colour": "blue"
      },
      {
        "name": "DecayMod",
        "colour": "blue"
      },
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "AM",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Env",
        "colour": "blue"
      },
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Attack",
        "type": "EnvTime"
      },
      {
        "name": "Hold",
        "type": "EnvTime"
      },
      {
        "name": "Decay",
        "type": "EnvTime"
      },
      {
        "name": "AttackMod",
        "type": "Level_100"
      },
      {
        "name": "HoldMod",
        "type": "Level_100"
      },
      {
        "name": "DecayMod",
        "type": "Level_100"
      },
      {
        "name": "OutputType",
        "type": "PosNegInv"
      },
      {
        "name": "KB",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 170,
    "height": 2,
    "longnm": "2 inputs",
    "shortnm": "2-In",
    "page": {
      "name": "In/Out",
      "ord": 2
    },
    "inputs": [],
    "outputs": [
      {
        "name": "OutL",
        "colour": "red"
      },
      {
        "name": "OutR",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Source",
        "type": "Source_2"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Pad",
        "type": "Pad_4"
      }
    ],
    "modes": []
  },
  {
    "id": 171,
    "height": 2,
    "longnm": "4 inputs",
    "shortnm": "4-In",
    "page": {
      "name": "In/Out",
      "ord": 3
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Out1",
        "colour": "red"
      },
      {
        "name": "Out2",
        "colour": "red"
      },
      {
        "name": "Out3",
        "colour": "red"
      },
      {
        "name": "Out4",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Source",
        "type": "Source_3"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Pad",
        "type": "Pad_4"
      }
    ],
    "modes": []
  },
  {
    "id": 172,
    "height": 2,
    "longnm": "Delay Static",
    "shortnm": "DlySingleA",
    "page": {
      "name": "Delay",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "DelayTime_3"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_3"
      }
    ]
  },
  {
    "id": 173,
    "height": 2,
    "longnm": "Delay Single",
    "shortnm": "DlySingleB",
    "page": {
      "name": "Delay",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Time",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "DelayTime_3"
      },
      {
        "name": "TimeMod",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_3"
      }
    ]
  },
  {
    "id": 174,
    "height": 3,
    "longnm": "Delay Dual",
    "shortnm": "DelayDual",
    "page": {
      "name": "Delay",
      "ord": 2
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Time1",
        "colour": "red"
      },
      {
        "name": "Time2",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "red"
      },
      {
        "name": "Out2",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time1",
        "type": "DelayTime_3"
      },
      {
        "name": "Time1Mod",
        "type": "Level_100"
      },
      {
        "name": "Time2",
        "type": "DelayTime_3"
      },
      {
        "name": "Time2Mod",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_3"
      }
    ]
  },
  {
    "id": 175,
    "height": 5,
    "longnm": "Delay Quad",
    "shortnm": "DelayQuad",
    "page": {
      "name": "Delay",
      "ord": 3
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "Time1",
        "colour": "red"
      },
      {
        "name": "Time2",
        "colour": "red"
      },
      {
        "name": "Time3",
        "colour": "red"
      },
      {
        "name": "Time4",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "OutMain",
        "colour": "red"
      },
      {
        "name": "Out1",
        "colour": "red"
      },
      {
        "name": "Out2",
        "colour": "red"
      },
      {
        "name": "Out3",
        "colour": "red"
      },
      {
        "name": "Out4",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time1",
        "type": "DelayTime_3"
      },
      {
        "name": "Time1Mod",
        "type": "Level_100"
      },
      {
        "name": "Time2",
        "type": "DelayTime_3"
      },
      {
        "name": "Time2Mod",
        "type": "Level_100"
      },
      {
        "name": "Time3",
        "type": "DelayTime_3"
      },
      {
        "name": "Time3Mod",
        "type": "Level_100"
      },
      {
        "name": "Time4",
        "type": "DelayTime_3"
      },
      {
        "name": "Time4Mod",
        "type": "Level_100"
      },
      {
        "name": "TimeClk",
        "type": "TimeClk"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_3"
      }
    ]
  },
  {
    "id": 176,
    "height": 3,
    "longnm": "Delay A",
    "shortnm": "DelayA",
    "page": {
      "name": "Delay",
      "ord": 7
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "DelayTime_2"
      },
      {
        "name": "FB",
        "type": "Level_100"
      },
      {
        "name": "Filter",
        "type": "Level_100"
      },
      {
        "name": "DryWet",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "TimeClk",
        "type": "TimeClk"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_2"
      }
    ]
  },
  {
    "id": 177,
    "height": 4,
    "longnm": "Delay B",
    "shortnm": "DelayB",
    "page": {
      "name": "Delay",
      "ord": 8
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      },
      {
        "name": "FBMod",
        "colour": "purple"
      },
      {
        "name": "DryWetMod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "DelayTime_2"
      },
      {
        "name": "FB",
        "type": "Level_100"
      },
      {
        "name": "LP",
        "type": "Level_100"
      },
      {
        "name": "DryWet",
        "type": "Level_100"
      },
      {
        "name": "TimeClk",
        "type": "TimeClk"
      },
      {
        "name": "FBMod",
        "type": "Level_100"
      },
      {
        "name": "DryWetMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "HP",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_2"
      }
    ]
  },
  {
    "id": 178,
    "height": 2,
    "longnm": "Delay Clocked",
    "shortnm": "DlyClock",
    "page": {
      "name": "Delay",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Clk",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Delay",
        "type": "Range_128"
      }
    ],
    "modes": []
  },
  {
    "id": 179,
    "height": 2,
    "longnm": "Shift Register",
    "shortnm": "DlyShiftReg",
    "page": {
      "name": "Delay",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Clk",
        "colour": "orange"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "purple"
      },
      {
        "name": "Out2",
        "colour": "purple"
      },
      {
        "name": "Out3",
        "colour": "purple"
      },
      {
        "name": "Out4",
        "colour": "purple"
      },
      {
        "name": "Out5",
        "colour": "purple"
      },
      {
        "name": "Out6",
        "colour": "purple"
      },
      {
        "name": "Out7",
        "colour": "purple"
      },
      {
        "name": "Out8",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 180,
    "height": 12,
    "longnm": "FM Operator",
    "shortnm": "Operator",
    "page": {
      "name": "Osc",
      "ord": 14
    },
    "inputs": [
      {
        "name": "Freq",
        "colour": "blue"
      },
      {
        "name": "FM",
        "colour": "red"
      },
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "Note",
        "colour": "blue"
      },
      {
        "name": "AMod",
        "colour": "blue"
      },
      {
        "name": "Vel",
        "colour": "blue"
      },
      {
        "name": "Pitch",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "Sync",
        "type": "OffOn"
      },
      {
        "name": "RatioFixed",
        "type": "RatioFixed"
      },
      {
        "name": "FreqCoarse",
        "type": "OpFreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "OpFreqFine"
      },
      {
        "name": "FreqDetune",
        "type": "OpFreqDetune"
      },
      {
        "name": "Vel",
        "type": "OpVel"
      },
      {
        "name": "RateScale",
        "type": "OpRateScale"
      },
      {
        "name": "R1",
        "type": "OpTime"
      },
      {
        "name": "L1",
        "type": "OpLevel"
      },
      {
        "name": "R2",
        "type": "OpTime"
      },
      {
        "name": "L2",
        "type": "OpLevel"
      },
      {
        "name": "R3",
        "type": "OpTime"
      },
      {
        "name": "L3",
        "type": "OpLevel"
      },
      {
        "name": "R4",
        "type": "OpTime"
      },
      {
        "name": "L4",
        "type": "OpLevel"
      },
      {
        "name": "AMod",
        "type": "OpAmod"
      },
      {
        "name": "BrPoint",
        "type": "OpBrPpoint"
      },
      {
        "name": "LDepthMode",
        "type": "OpDepthMode"
      },
      {
        "name": "LDepth",
        "type": "OpDepth"
      },
      {
        "name": "RDepthMode",
        "type": "OpDepthMode"
      },
      {
        "name": "RDepth",
        "type": "OpDepth"
      },
      {
        "name": "OutLevel",
        "type": "OpLevel"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "EnvKB",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 181,
    "height": 3,
    "longnm": "Delay 8 Tap",
    "shortnm": "DlyEight",
    "page": {
      "name": "Delay",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out1",
        "colour": "red"
      },
      {
        "name": "Out2",
        "colour": "red"
      },
      {
        "name": "Out3",
        "colour": "red"
      },
      {
        "name": "Out4",
        "colour": "red"
      },
      {
        "name": "Out5",
        "colour": "red"
      },
      {
        "name": "Out6",
        "colour": "red"
      },
      {
        "name": "Out7",
        "colour": "red"
      },
      {
        "name": "Out8",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Time",
        "type": "DelayTime_3"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_3"
      }
    ]
  },
  {
    "id": 182,
    "height": 5,
    "longnm": "Delay Stereo",
    "shortnm": "DlyStereo",
    "page": {
      "name": "Delay",
      "ord": 9
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "red"
      },
      {
        "name": "OutR",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "TimeLeft",
        "type": "DelayTime_1"
      },
      {
        "name": "TimeRight",
        "type": "DelayTime_1"
      },
      {
        "name": "FBLeft",
        "type": "Level_100"
      },
      {
        "name": "FBRight",
        "type": "Level_100"
      },
      {
        "name": "XFBLeft",
        "type": "Level_100"
      },
      {
        "name": "XFBRight",
        "type": "Level_100"
      },
      {
        "name": "TimeClk",
        "type": "TimeClk"
      },
      {
        "name": "LP",
        "type": "Level_100"
      },
      {
        "name": "DryWet",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "HP",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "DelayRange",
        "type": "DelayRange_1"
      }
    ]
  },
  {
    "id": 183,
    "height": 3,
    "longnm": "Osc Phase Mod",
    "shortnm": "OscPM",
    "page": {
      "name": "Osc",
      "ord": 4
    },
    "inputs": [
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Sync",
        "colour": "red"
      },
      {
        "name": "PhaseMod",
        "colour": "red"
      },
      {
        "name": "Pitch",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "PhaseMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "PitchVar",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "Waveform",
        "type": "OscWaveform_1"
      }
    ]
  },
  {
    "id": 184,
    "height": 2,
    "longnm": "Mixer 1-1 A",
    "shortnm": "Mix1-1A",
    "page": {
      "name": "Mixer",
      "ord": 0
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev",
        "type": "MixLevel"
      },
      {
        "name": "On",
        "type": "OffOn"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 185,
    "height": 2,
    "longnm": "Mixer 1-1 Stereo",
    "shortnm": "Mix1-1S",
    "page": {
      "name": "Mixer",
      "ord": 1
    },
    "inputs": [
      {
        "name": "InL",
        "colour": "purple"
      },
      {
        "name": "InR",
        "colour": "purple"
      },
      {
        "name": "LChain",
        "colour": "purple"
      },
      {
        "name": "RChain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "OutL",
        "colour": "purple"
      },
      {
        "name": "OutR",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev",
        "type": "MixLevel"
      },
      {
        "name": "On",
        "type": "OffOn"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 186,
    "height": 2,
    "longnm": "Switch 1-2 Momentary",
    "shortnm": "Sw1-2M",
    "page": {
      "name": "Switch",
      "ord": 6
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "OutOn",
        "colour": "purple"
      },
      {
        "name": "OutOff",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 187,
    "height": 2,
    "longnm": "Switch 2-1 Momentary",
    "shortnm": "Sw2-1M",
    "page": {
      "name": "Switch",
      "ord": 2
    },
    "inputs": [
      {
        "name": "InOff",
        "colour": "purple"
      },
      {
        "name": "InOn",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Ctrl",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Sel",
        "type": "OffOn"
      }
    ],
    "modes": []
  },
  {
    "id": 188,
    "height": 2,
    "longnm": "Constant Switch Momentary",
    "shortnm": "ConstSwM",
    "page": {
      "name": "Level",
      "ord": 1
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Lev",
        "type": "LevBipUni"
      },
      {
        "name": "On",
        "type": "OffOn"
      },
      {
        "name": "BipUni",
        "type": "BipUni"
      }
    ],
    "modes": []
  },
  {
    "id": 189,
    "height": 3,
    "longnm": "Noise Gate",
    "shortnm": "NoiseGate",
    "page": {
      "name": "Level",
      "ord": 9
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      },
      {
        "name": "Env",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Threshold",
        "type": "Threshold_127"
      },
      {
        "name": "Attack",
        "type": "NoiseGateAttack"
      },
      {
        "name": "Release",
        "type": "NoiseGateRelease"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 190,
    "height": 4,
    "longnm": "LFO B",
    "shortnm": "LfoB",
    "page": {
      "name": "LFO",
      "ord": 1
    },
    "inputs": [
      {
        "name": "Rate",
        "colour": "blue"
      },
      {
        "name": "RateVar",
        "colour": "blue"
      },
      {
        "name": "Rst",
        "colour": "blue"
      },
      {
        "name": "Phase",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      },
      {
        "name": "Sync",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "LfoRate_4"
      },
      {
        "name": "RateMod",
        "type": "Level_100"
      },
      {
        "name": "Range",
        "type": "LfoRange_4"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "Waveform",
        "type": "LfoB_Waveform"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "Phase",
        "type": "Phase"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "OutputType",
        "type": "OutTypeLfo"
      },
      {
        "name": "PhaseMod",
        "type": "Level_100"
      }
    ],
    "modes": []
  },
  {
    "id": 192,
    "height": 2,
    "longnm": "Phaser",
    "shortnm": "Phaser",
    "page": {
      "name": "FX",
      "ord": 1
    },
    "inputs": [
      {
        "name": "In",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "Type",
        "type": "PhaserType"
      },
      {
        "name": "Freq",
        "type": "PhaserFreq"
      },
      {
        "name": "FeedBack",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 193,
    "height": 2,
    "longnm": "Mixer 4-1 A",
    "shortnm": "Mix4-1A",
    "page": {
      "name": "Mixer",
      "ord": 4
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "In3",
        "colour": "purple"
      },
      {
        "name": "In4",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 194,
    "height": 2,
    "longnm": "Mixer 2-1 A",
    "shortnm": "Mix2-1A",
    "page": {
      "name": "Mixer",
      "ord": 2
    },
    "inputs": [
      {
        "name": "In1",
        "colour": "purple"
      },
      {
        "name": "In2",
        "colour": "purple"
      },
      {
        "name": "Chain",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "Lev1",
        "type": "MixLevel"
      },
      {
        "name": "On1",
        "type": "OffOn"
      },
      {
        "name": "Lev2",
        "type": "MixLevel"
      },
      {
        "name": "On2",
        "type": "OffOn"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_2"
      }
    ],
    "modes": []
  },
  {
    "id": 195,
    "height": 2,
    "longnm": "Modulation Amount",
    "shortnm": "ModAmt",
    "page": {
      "name": "Level",
      "ord": 13
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      },
      {
        "name": "Mod",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "ModDepth",
        "type": "Level_100"
      },
      {
        "name": "On",
        "type": "OffOn"
      },
      {
        "name": "ExpLin",
        "type": "ExpLin_1"
      },
      {
        "name": "InvertMode",
        "type": "ModAmtInvert"
      }
    ],
    "modes": []
  },
  {
    "id": 196,
    "height": 3,
    "longnm": "Osc Percussion",
    "shortnm": "OscPerc",
    "page": {
      "name": "Osc",
      "ord": 11
    },
    "inputs": [
      {
        "name": "Pitch",
        "colour": "purple"
      },
      {
        "name": "PitchVar",
        "colour": "purple"
      },
      {
        "name": "Trig",
        "colour": "red"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "red"
      }
    ],
    "params": [
      {
        "name": "FreqCoarse",
        "type": "FreqCoarse"
      },
      {
        "name": "FreqFine",
        "type": "FreqFine"
      },
      {
        "name": "FreqMode",
        "type": "FreqMode_3"
      },
      {
        "name": "Kbt",
        "type": "Kbt_1"
      },
      {
        "name": "PitchMod",
        "type": "Level_100"
      },
      {
        "name": "Decay",
        "type": "Level_100"
      },
      {
        "name": "Click",
        "type": "Level_100"
      },
      {
        "name": "Punch",
        "type": "OffOn"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 197,
    "height": 2,
    "longnm": "Status",
    "shortnm": "Status",
    "page": {
      "name": "In/Out",
      "ord": 8
    },
    "inputs": [],
    "outputs": [
      {
        "name": "PatchActive",
        "colour": "yellow"
      },
      {
        "name": "VarActive",
        "colour": "yellow"
      },
      {
        "name": "VoiceNo",
        "colour": "blue"
      }
    ],
    "params": [],
    "modes": []
  },
  {
    "id": 198,
    "height": 2,
    "longnm": "Pitch Tracker",
    "shortnm": "PitchTrack",
    "page": {
      "name": "Note",
      "ord": 5
    },
    "inputs": [
      {
        "name": "In",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Period",
        "colour": "orange"
      },
      {
        "name": "Gate",
        "colour": "orange"
      },
      {
        "name": "Pitch",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Threshold",
        "type": "Threshold_127"
      }
    ],
    "modes": []
  },
  {
    "id": 199,
    "height": 2,
    "longnm": "Monophonic Keyboard",
    "shortnm": "MonoKey",
    "page": {
      "name": "In/Out",
      "ord": 6
    },
    "inputs": [],
    "outputs": [
      {
        "name": "Pitch",
        "colour": "blue"
      },
      {
        "name": "Gate",
        "colour": "yellow"
      },
      {
        "name": "Vel",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Mode",
        "type": "MonoKeyMode"
      }
    ],
    "modes": []
  },
  {
    "id": 200,
    "height": 2,
    "longnm": "Random A",
    "shortnm": "RandomA",
    "page": {
      "name": "Rnd",
      "ord": 0
    },
    "inputs": [
      {
        "name": "Rate",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "LfoRate_3"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "OutputType",
        "type": "BipPosNeg"
      },
      {
        "name": "Range",
        "type": "LfoRange_3"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "Edge",
        "type": "RndEdge"
      },
      {
        "name": "StepProb",
        "type": "RandomAStepProb"
      }
    ],
    "modes": []
  },
  {
    "id": 202,
    "height": 3,
    "longnm": "Random B",
    "shortnm": "RandomB",
    "page": {
      "name": "Rnd",
      "ord": 1
    },
    "inputs": [
      {
        "name": "Rate",
        "colour": "blue"
      },
      {
        "name": "RateVar",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "blue"
      }
    ],
    "params": [
      {
        "name": "Rate",
        "type": "LfoRate_3"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "Kbt",
        "type": "Kbt_4"
      },
      {
        "name": "RateMod",
        "type": "Level_100"
      },
      {
        "name": "StepProb",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "OutputType",
        "type": "BipPosNeg"
      },
      {
        "name": "Range",
        "type": "LfoRange_3"
      },
      {
        "name": "Edge",
        "type": "RndEdge"
      }
    ],
    "modes": []
  },
  {
    "id": 204,
    "height": 2,
    "longnm": "Random Clock A",
    "shortnm": "RndClkA",
    "page": {
      "name": "Rnd",
      "ord": 2
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      },
      {
        "name": "Seed",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "StepProb",
        "type": "Level_100"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "Dice",
        "type": "OffOn"
      },
      {
        "name": "OutputType",
        "type": "BipPosNeg"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": []
  },
  {
    "id": 205,
    "height": 2,
    "longnm": "Random Trig",
    "shortnm": "RndTrig",
    "page": {
      "name": "Rnd",
      "ord": 4
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      },
      {
        "name": "Seed",
        "colour": "purple"
      },
      {
        "name": "Prob",
        "colour": "purple"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "orange"
      }
    ],
    "params": [
      {
        "name": "StepProb",
        "type": "Level_100"
      },
      {
        "name": "StepProbMod",
        "type": "Level_100"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      }
    ],
    "modes": []
  },
  {
    "id": 206,
    "height": 3,
    "longnm": "Random Clock B",
    "shortnm": "RndClkB",
    "page": {
      "name": "Rnd",
      "ord": 3
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      },
      {
        "name": "Seed",
        "colour": "purple"
      },
      {
        "name": "Step",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "StepProb",
        "type": "Level_100"
      },
      {
        "name": "OutputType",
        "type": "BipPosNeg"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      },
      {
        "name": "PolyMono",
        "type": "PolyMono"
      },
      {
        "name": "StepProbMod",
        "type": "Level_100"
      }
    ],
    "modes": [
      {
        "name": "Character",
        "type": "Rnd_1"
      }
    ]
  },
  {
    "id": 208,
    "height": 3,
    "longnm": "Random Pattern",
    "shortnm": "RndPattern",
    "page": {
      "name": "Rnd",
      "ord": 5
    },
    "inputs": [
      {
        "name": "Clk",
        "colour": "orange"
      },
      {
        "name": "Rst",
        "colour": "orange"
      },
      {
        "name": "A",
        "colour": "blue"
      },
      {
        "name": "B",
        "colour": "blue"
      },
      {
        "name": "StepProb",
        "colour": "blue"
      }
    ],
    "outputs": [
      {
        "name": "Out",
        "colour": "purple"
      }
    ],
    "params": [
      {
        "name": "PatternA",
        "type": "RangeBip_128"
      },
      {
        "name": "PatternB",
        "type": "Level_100"
      },
      {
        "name": "StepProb",
        "type": "RangeBip_128"
      },
      {
        "name": "LoopCount",
        "type": "Range_128"
      },
      {
        "name": "StepProbMod",
        "type": "Level_100"
      },
      {
        "name": "OutputType",
        "type": "BipPosNeg"
      },
      {
        "name": "Active",
        "type": "ActiveMonitor"
      }
    ],
    "modes": [
      {
        "name": "Waveform",
        "type": "RndStepPulse"
      }
    ]
  }
];

function getModuleByName(n)
{
	return modules.find( function (x) {return x.shortnm==n});
}