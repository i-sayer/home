{ // start of in/out
	id: 1,
	height: 2,
	longnm: "Keyboard",
	shortnm: "Keyboard",
	page: {
		name: "In/Out",
		ord: 5
	},
	inputs: [],
	outputs: [
		{
			name: "Pitch",
			colour: "blue",
			x: 34,
			y: 19
		},
		{
			name: "Gate",
			colour: "yellow",
			x: 124,
			y: 19
		},
		{
			name: "Lin",
			colour: "blue",
			x: 162,
			y: 19
		},
		{
			name: "Release",
			colour: "blue",
			x: 246,
			y: 19
		},
		{
			name: "Note",
			colour: "blue",
			x: 80,
			y: 19
		},
		{
			name: "Exp",
			colour: "blue",
			x: 197,
			y: 19
		}
	],
	params: [],
	modes: [],
	ve: [
		{
			type: "line",
			"x1": 189,
			"y1": 7,
			"x2": 251,
			"y2": 7
		},
		{
			type: "line",
			"x1": 141,
			"y1": 7,
			"x2": 151,
			"y2": 7
		},
		{
			type: "text",
			x: 3,
			y: 23,
			t: "Pitch"
		},
		{
			type: "text",
			x: 95,
			y: 23,
			t: "Gate"
		},
		{
			type: "text",
			x: 140,
			y: 23,
			t: "Lin"
		},
		{
			type: "text",
			x: 205,
			y: 23,
			t: "Release"
		},
		{
			type: "text",
			x: 51,
			y: 23,
			t: "Note"
		},
		{
			type: "text",
			x: 172,
			y: 23,
			t: "Exp"
		},
		{
			type: "text",
			x: 151,
			y: 11,
			t: "Velocity"
		}
	]
},{
	id: 3,
	height: 2,
	longnm: "4 outputs",
	shortnm: "4-Out",
	page: {
		name: "In/Out",
		ord: 1
	},
	inputs: [
		{
			name: "In1",
			colour: "red",
			x: 168,
			y: 50
		},
		{
			name: "In2",
			colour: "red",
			x: 194,
			y: 50
		},
		{
			name: "In3",
			colour: "red",
			x: 220,
			y: 50
		},
		{
			name: "In4",
			colour: "red",
			x: 246,
			y: 50
		}
	],
	outputs: [],
	params: [
		{
			name: "Destination",
			type: "Dst_2",
			n: "SwM3251911c",
			x: 78.5,
			y: 8.5
		},
		{
			name: "Active",
			type: "ActiveMonitor",
			n: "SwM4d",
			x: 140.25,
			y: 14.5
		},
		{
			name: "Pad",
			type: "Pad_1",
			n: "SwM7121db69",
			x: 23.5,
			y: 14.5
		}
	],
	modes: [],
	ve: [
		{
			type: "text",
			x: 165,
			y: 10,
			t: "1"
		},
		{
			type: "text",
			x: 191,
			y: 10,
			t: "2"
		},
		{
			type: "text",
			x: 217,
			y: 10,
			t: "3"
		},
		{
			type: "text",
			x: 242,
			y: 10,
			t: "4"
		},
		{
			type: "text",
			x: 4,
			y: 23,
			t: "Pad"
		}
	]
},{
	id: 4,
	height: 2,
	longnm: "2 outputs",
	shortnm: "2-Out",
	page: {
		name: "In/Out",
		ord: 0
	},
	inputs: [
		{
			name: "InL",
			colour: "red",
			x: 220,
			y: 82
		},
		{
			name: "InR",
			colour: "red",
			x: 246,
			y: 82
		}
	],
	outputs: [],
	params: [
		{
			name: "Destination",
			type: "Dst_1",
			n: "SwM1b5f3ad8",
			x: 78.5,
			y: 12.5
		},
		{
			name: "Active",
			type: "ActiveMonitor",
			n: "SwM4d",
			x: 192.25,
			y: 14.5
		},
		{
			name: "Pad",
			type: "Pad_1",
			n: "SwM7121db69",
			x: 23.5,
			y: 14.5
		}
	],
	modes: [],
	ve: [
		{
			type: "text",
			x: 216,
			y: 10,
			t: "L"
		},
		{
			type: "text",
			x: 242,
			y: 10,
			t: "R"
		},
		{
			type: "text",
			x: 123,
			y: 9,
			t: "Fx"
		},
		{
			type: "text",
			x: 154,
			y: 9,
			t: "Bus"
		},
		{
			type: "text",
			x: 87,
			y: 9,
			t: "Out"
		},
		{
			type: "text",
			x: 4,
			y: 23,
			t: "Pad"
		}
	]
},{
	id: 30,
	height: 3,
	longnm: "Device",
	shortnm: "Device",
	page: {
		name: "In/Out",
		ord: 7
	},
	inputs: [],
	outputs: [
		{
			name: "Wheel",
			colour: "blue",
			x: 18,
			y: 131
		},
		{
			name: "AftTouch",
			colour: "blue",
			x: 58,
			y: 131
		},
		{
			name: "ControlPedal",
			colour: "blue",
			x: 98,
			y: 131
		},
		{
			name: "SustainPedal",
			colour: "yellow",
			x: 138,
			y: 131
		},
		{
			name: "PitchStick",
			colour: "blue",
			x: 178,
			y: 131
		},
		{
			name: "GlobalWheel1",
			colour: "blue",
			x: 216,
			y: 131
		},
		{
			name: "GlobalWheel2",
			colour: "blue",
			x: 246,
			y: 131
		}
	],
	params: [],
	modes: [],
	ve: [
		{
			type: "text",
			x: 166,
			y: 26,
			t: "Stick"
		},
		{
			type: "text",
			x: 125,
			y: 26,
			t: "Pedal"
		},
		{
			type: "text",
			x: 3,
			y: 26,
			t: "Wheel"
		},
		{
			type: "text",
			x: 36,
			y: 26,
			t: "AftTouch"
		},
		{
			type: "text",
			x: 86,
			y: 26,
			t: "Pedal"
		},
		{
			type: "text",
			x: 82,
			y: 16,
			t: "Control"
		},
		{
			type: "text",
			x: 121,
			y: 16,
			t: "Sustain"
		},
		{
			type: "text",
			x: 166,
			y: 16,
			t: "Pitch"
		},
		{
			type: "text",
			x: 217,
			y: 16,
			t: "Global"
		},
		{
			type: "text",
			x: 204,
			y: 39,
			t: "1"
		},
		{
			type: "text",
			x: 233,
			y: 39,
			t: "2"
		},
		{
			type: "text",
			x: 214,
			y: 26,
			t: "Wheels"
		}
	]
},{
	id: 127,
	height: 2,
	longnm: "Fx Input",
	shortnm: "Fx-In",
	page: {
		name: "In/Out",
		ord: 4
	},
	inputs: [],
	outputs: [
		{
			name: "OutL",
			colour: "red",
			x: 220,
			y: 178
		},
		{
			name: "OutR",
			colour: "red",
			x: 246,
			y: 178
		}
	],
	params: [
		{
			name: "Source",
			type: "Source_1",
			n: "SwM731a7980",
			x: 78.5,
			y: 12.5
		},
		{
			name: "Active",
			type: "ActiveMonitor",
			n: "SwM4d",
			x: 192.25,
			y: 14.5
		},
		{
			name: "Pad",
			type: "Pad_4",
			n: "SwMdc07958",
			x: 23.5,
			y: 14.5
		}
	],
	modes: [],
	ve: [
		{
			type: "text",
			x: 216,
			y: 10,
			t: "L"
		},
		{
			type: "text",
			x: 242,
			y: 10,
			t: "R"
		},
		{
			type: "text",
			x: 90,
			y: 9,
			t: "Fx"
		},
		{
			type: "text",
			x: 4,
			y: 23,
			t: "Pad"
		}
	]
},{
	id: 156,
	height: 2,
	longnm: "Note Detector",
	shortnm: "NoteDet",
	page: {
		name: "In/Out",
		ord: 9
	},
	inputs: [],
	outputs: [
		{
			name: "Gate",
			colour: "yellow",
			x: 178,
			y: 210
		},
		{
			name: "Vel",
			colour: "blue",
			x: 208,
			y: 210
		},
		{
			name: "RelVel",
			colour: "blue",
			x: 238,
			y: 210
		}
	],
	params: [
		{
			name: "Note",
			type: "FreqCoarse",
			n: "KnobMedium",
			x: 120.5,
			y: 5.5
		}
	],
	modes: [],
	ve: [
		{
			type: "valueDisplay",
			x: 85,
			y: 12,
			w: 32,
			ref: 0
		},
		{
			type: "led",
			x: 186,
			y: 15,
			w: 6.5
		},
		{
			type: "text",
			x: 89,
			y: 9,
			t: "Note"
		},
		{
			type: "text",
			x: 200,
			y: 10,
			t: "Vel"
		},
		{
			type: "text",
			x: 166,
			y: 10,
			t: "Gate"
		},
		{
			type: "text",
			x: 224,
			y: 10,
			t: "RelVel"
		}
	]
},{
	id: 170,
	height: 2,
	longnm: "2 inputs",
	shortnm: "2-In",
	page: {
		name: "In/Out",
		ord: 2
	},
	inputs: [],
	outputs: [
		{
			name: "OutL",
			colour: "red",
			x: 220,
			y: 242
		},
		{
			name: "OutR",
			colour: "red",
			x: 246,
			y: 242
		}
	],
	params: [
		{
			name: "Source",
			type: "Source_2",
			n: "SwM7e68d6ac",
			x: 78.5,
			y: 12.5
		},
		{
			name: "Active",
			type: "ActiveMonitor",
			n: "SwM4d",
			x: 192.25,
			y: 14.5
		},
		{
			name: "Pad",
			type: "Pad_4",
			n: "SwMdc07958",
			x: 23.5,
			y: 14.5
		}
	],
	modes: [],
	ve: [
		{
			type: "text",
			x: 91,
			y: 9,
			t: "In"
		},
		{
			type: "text",
			x: 120,
			y: 9,
			t: "Bus"
		},
		{
			type: "text",
			x: 216,
			y: 10,
			t: "L"
		},
		{
			type: "text",
			x: 242,
			y: 10,
			t: "R"
		},
		{
			type: "text",
			x: 4,
			y: 23,
			t: "Pad"
		}
	]
},{
	id: 171,
	height: 2,
	longnm: "4 inputs",
	shortnm: "4-In",
	page: {
		name: "In/Out",
		ord: 3
	},
	inputs: [],
	outputs: [
		{
			name: "Out1",
			colour: "red",
			x: 168,
			y: 274
		},
		{
			name: "Out2",
			colour: "red",
			x: 194,
			y: 274
		},
		{
			name: "Out3",
			colour: "red",
			x: 220,
			y: 274
		},
		{
			name: "Out4",
			colour: "red",
			x: 246,
			y: 274
		}
	],
	params: [
		{
			name: "Source",
			type: "Source_3",
			n: "SwM7d4b1a87",
			x: 78.5,
			y: 8.5
		},
		{
			name: "Active",
			type: "ActiveMonitor",
			n: "SwM4d",
			x: 140.25,
			y: 14.5
		},
		{
			name: "Pad",
			type: "Pad_4",
			n: "SwMdc07958",
			x: 23.5,
			y: 14.5
		}
	],
	modes: [],
	ve: [
		{
			type: "text",
			x: 242,
			y: 10,
			t: "4"
		},
		{
			type: "text",
			x: 216,
			y: 10,
			t: "3"
		},
		{
			type: "text",
			x: 191,
			y: 10,
			t: "2"
		},
		{
			type: "text",
			x: 165,
			y: 10,
			t: "1"
		},
		{
			type: "text",
			x: 4,
			y: 23,
			t: "Pad"
		}
	]
},{
	id: 197,
	height: 2,
	longnm: "Status",
	shortnm: "Status",
	page: {
		name: "In/Out",
		ord: 8
	},
	inputs: [],
	outputs: [
		{
			name: "PatchActive",
			colour: "yellow",
			x: 369,
			y: 18
		},
		{
			name: "VarActive",
			colour: "yellow",
			x: 428,
			y: 18
		},
		{
			name: "VoiceNo",
			colour: "blue",
			x: 487,
			y: 18
		}
	],
	params: [],
	modes: [],
	ve: [
		{
			type: "text",
			x: 147,
			y: 10,
			t: "Var. Active"
		},
		{
			type: "text",
			x: 82,
			y: 10,
			t: "Patch Active"
		},
		{
			type: "text",
			x: 211,
			y: 10,
			t: "Voice No."
		}
	]
},{
	id: 199,
	height: 2,
	longnm: "Monophonic Keyboard",
	shortnm: "MonoKey",
	page: {
		name: "In/Out",
		ord: 6
	},
	inputs: [],
	outputs: [
		{
			name: "Pitch",
			colour: "blue",
			x: 442,
			y: 50
		},
		{
			name: "Gate",
			colour: "yellow",
			x: 472,
			y: 50
		},
		{
			name: "Vel",
			colour: "blue",
			x: 502,
			y: 50
		}
	],
	params: [
		{
			name: "Mode",
			type: "MonoKeyMode",
			n: "SwM5a5300ac",
			x: 88.5,
			y: 8.5
		}
	],
	modes: [],
	ve: [
		{
			type: "text",
			x: 205,
			y: 10,
			t: "Gate"
		},
		{
			type: "text",
			x: 174,
			y: 10,
			t: "Pitch"
		},
		{
			type: "text",
			x: 238,
			y: 10,
			t: "Vel"
		}
	]
},////////// end of in/out
