const flies = [
  {
    "day": 0,
    "living": 1203646,
    "mort.rate": 0
  },
  {
    "day": 1,
    "living": 1203646,
    "mort.rate": 0.0014
  },
  {
    "day": 2,
    "living": 1201913,
    "mort.rate": 0.004
  },
  {
    "day": 3,
    "living": 1197098,
    "mort.rate": 0.0051
  },
  {
    "day": 4,
    "living": 1191020,
    "mort.rate": 0.0064
  },
  {
    "day": 5,
    "living": 1183419,
    "mort.rate": 0.0075
  },
  {
    "day": 6,
    "living": 1174502,
    "mort.rate": 0.0098
  },
  {
    "day": 7,
    "living": 1163026,
    "mort.rate": 0.0123
  },
  {
    "day": 8,
    "living": 1148693,
    "mort.rate": 0.0164
  },
  {
    "day": 9,
    "living": 1129836,
    "mort.rate": 0.0218
  },
  {
    "day": 10,
    "living": 1105164,
    "mort.rate": 0.0298
  },
  {
    "day": 11,
    "living": 1072209,
    "mort.rate": 0.0379
  },
  {
    "day": 12,
    "living": 1031620,
    "mort.rate": 0.0452
  },
  {
    "day": 13,
    "living": 984980,
    "mort.rate": 0.0589
  },
  {
    "day": 14,
    "living": 927011,
    "mort.rate": 0.0634
  },
  {
    "day": 15,
    "living": 868202,
    "mort.rate": 0.0722
  },
  {
    "day": 16,
    "living": 805489,
    "mort.rate": 0.0757
  },
  {
    "day": 17,
    "living": 744520,
    "mort.rate": 0.0793
  },
  {
    "day": 18,
    "living": 685514,
    "mort.rate": 0.0826
  },
  {
    "day": 19,
    "living": 628866,
    "mort.rate": 0.085
  },
  {
    "day": 20,
    "living": 575420,
    "mort.rate": 0.0923
  },
  {
    "day": 21,
    "living": 522319,
    "mort.rate": 0.0968
  },
  {
    "day": 22,
    "living": 471756,
    "mort.rate": 0.1002
  },
  {
    "day": 23,
    "living": 424469,
    "mort.rate": 0.1059
  },
  {
    "day": 24,
    "living": 379537,
    "mort.rate": 0.1102
  },
  {
    "day": 25,
    "living": 337704,
    "mort.rate": 0.1158
  },
  {
    "day": 26,
    "living": 298596,
    "mort.rate": 0.1299
  },
  {
    "day": 27,
    "living": 259811,
    "mort.rate": 0.1336
  },
  {
    "day": 28,
    "living": 225101,
    "mort.rate": 0.1361
  },
  {
    "day": 29,
    "living": 194464,
    "mort.rate": 0.128
  },
  {
    "day": 30,
    "living": 169569,
    "mort.rate": 0.1213
  },
  {
    "day": 31,
    "living": 149002,
    "mort.rate": 0.1214
  },
  {
    "day": 32,
    "living": 130911,
    "mort.rate": 0.1168
  },
  {
    "day": 33,
    "living": 115618,
    "mort.rate": 0.1241
  },
  {
    "day": 34,
    "living": 101271,
    "mort.rate": 0.125
  },
  {
    "day": 35,
    "living": 88612,
    "mort.rate": 0.1266
  },
  {
    "day": 36,
    "living": 77390,
    "mort.rate": 0.1224
  },
  {
    "day": 37,
    "living": 67921,
    "mort.rate": 0.1338
  },
  {
    "day": 38,
    "living": 58830,
    "mort.rate": 0.1154
  },
  {
    "day": 39,
    "living": 52043,
    "mort.rate": 0.1249
  },
  {
    "day": 40,
    "living": 45544,
    "mort.rate": 0.1212
  },
  {
    "day": 41,
    "living": 40022,
    "mort.rate": 0.1279
  },
  {
    "day": 42,
    "living": 34902,
    "mort.rate": 0.1301
  },
  {
    "day": 43,
    "living": 30360,
    "mort.rate": 0.1366
  },
  {
    "day": 44,
    "living": 26214,
    "mort.rate": 0.1439
  },
  {
    "day": 45,
    "living": 22441,
    "mort.rate": 0.136
  },
  {
    "day": 46,
    "living": 19390,
    "mort.rate": 0.1306
  },
  {
    "day": 47,
    "living": 16857,
    "mort.rate": 0.1361
  },
  {
    "day": 48,
    "living": 14562,
    "mort.rate": 0.1452
  },
  {
    "day": 49,
    "living": 12447,
    "mort.rate": 0.1338
  },
  {
    "day": 50,
    "living": 10782,
    "mort.rate": 0.1515
  },
  {
    "day": 51,
    "living": 9149,
    "mort.rate": 0.136
  },
  {
    "day": 52,
    "living": 7905,
    "mort.rate": 0.1456
  },
  {
    "day": 53,
    "living": 6754,
    "mort.rate": 0.1501
  },
  {
    "day": 54,
    "living": 5740,
    "mort.rate": 0.1326
  },
  {
    "day": 55,
    "living": 4979,
    "mort.rate": 0.1603
  },
  {
    "day": 56,
    "living": 4181,
    "mort.rate": 0.1605
  },
  {
    "day": 57,
    "living": 3510,
    "mort.rate": 0.1581
  },
  {
    "day": 58,
    "living": 2955,
    "mort.rate": 0.1672
  },
  {
    "day": 59,
    "living": 2461,
    "mort.rate": 0.1601
  },
  {
    "day": 60,
    "living": 2067,
    "mort.rate": 0.1316
  },
  {
    "day": 61,
    "living": 1795,
    "mort.rate": 0.1309
  },
  {
    "day": 62,
    "living": 1560,
    "mort.rate": 0.125
  },
  {
    "day": 63,
    "living": 1365,
    "mort.rate": 0.1341
  },
  {
    "day": 64,
    "living": 1182,
    "mort.rate": 0.1413
  },
  {
    "day": 65,
    "living": 1015,
    "mort.rate": 0.1685
  },
  {
    "day": 66,
    "living": 844,
    "mort.rate": 0.122
  },
  {
    "day": 67,
    "living": 741,
    "mort.rate": 0.1363
  },
  {
    "day": 68,
    "living": 640,
    "mort.rate": 0.1047
  },
  {
    "day": 69,
    "living": 573,
    "mort.rate": 0.1257
  },
  {
    "day": 70,
    "living": 501,
    "mort.rate": 0.0798
  },
  {
    "day": 71,
    "living": 461,
    "mort.rate": 0.1193
  },
  {
    "day": 72,
    "living": 406,
    "mort.rate": 0.1207
  },
  {
    "day": 73,
    "living": 357,
    "mort.rate": 0.1092
  },
  {
    "day": 74,
    "living": 318,
    "mort.rate": 0.1038
  },
  {
    "day": 75,
    "living": 285,
    "mort.rate": 0.0912
  },
  {
    "day": 76,
    "living": 259,
    "mort.rate": 0.1274
  },
  {
    "day": 77,
    "living": 226,
    "mort.rate": 0.0664
  },
  {
    "day": 78,
    "living": 211,
    "mort.rate": 0.0806
  },
  {
    "day": 79,
    "living": 194,
    "mort.rate": 0.067
  },
  {
    "day": 80,
    "living": 181,
    "mort.rate": 0.0663
  },
  {
    "day": 81,
    "living": 169,
    "mort.rate": 0.0769
  },
  {
    "day": 82,
    "living": 156,
    "mort.rate": 0.0897
  },
  {
    "day": 83,
    "living": 142,
    "mort.rate": 0.0845
  },
  {
    "day": 84,
    "living": 130,
    "mort.rate": 0.0615
  },
  {
    "day": 85,
    "living": 122,
    "mort.rate": 0.0574
  },
  {
    "day": 86,
    "living": 115,
    "mort.rate": 0.0522
  },
  {
    "day": 87,
    "living": 109,
    "mort.rate": 0.1009
  },
  {
    "day": 88,
    "living": 98,
    "mort.rate": 0.0714
  },
  {
    "day": 89,
    "living": 91,
    "mort.rate": 0
  },
  {
    "day": 90,
    "living": 91,
    "mort.rate": 0.0549
  },
  {
    "day": 91,
    "living": 86,
    "mort.rate": 0.0116
  },
  {
    "day": 92,
    "living": 85,
    "mort.rate": 0.0706
  },
  {
    "day": 93,
    "living": 79,
    "mort.rate": 0.0759
  },
  {
    "day": 94,
    "living": 73,
    "mort.rate": 0.0274
  },
  {
    "day": 95,
    "living": 71,
    "mort.rate": 0.0563
  },
  {
    "day": 96,
    "living": 67,
    "mort.rate": 0.0149
  },
  {
    "day": 97,
    "living": 66,
    "mort.rate": 0.0152
  },
  {
    "day": 98,
    "living": 65,
    "mort.rate": 0.0462
  },
  {
    "day": 99,
    "living": 62,
    "mort.rate": 0
  },
  {
    "day": 100,
    "living": 62,
    "mort.rate": 0
  },
  {
    "day": 101,
    "living": 62,
    "mort.rate": 0
  },
  {
    "day": 102,
    "living": 62,
    "mort.rate": 0.0645
  },
  {
    "day": 103,
    "living": 58,
    "mort.rate": 0.0172
  },
  {
    "day": 104,
    "living": 57,
    "mort.rate": 0.0351
  },
  {
    "day": 105,
    "living": 55,
    "mort.rate": 0.0182
  },
  {
    "day": 106,
    "living": 54,
    "mort.rate": 0.0185
  },
  {
    "day": 107,
    "living": 53,
    "mort.rate": 0
  },
  {
    "day": 108,
    "living": 53,
    "mort.rate": 0.0189
  },
  {
    "day": 109,
    "living": 52,
    "mort.rate": 0.0192
  },
  {
    "day": 110,
    "living": 51,
    "mort.rate": 0.0392
  },
  {
    "day": 111,
    "living": 49,
    "mort.rate": 0.0408
  },
  {
    "day": 112,
    "living": 47,
    "mort.rate": 0.0426
  },
  {
    "day": 113,
    "living": 45,
    "mort.rate": 0.0444
  },
  {
    "day": 114,
    "living": 43,
    "mort.rate": 0.0233
  },
  {
    "day": 115,
    "living": 42,
    "mort.rate": 0.0476
  },
  {
    "day": 116,
    "living": 40,
    "mort.rate": 0
  },
  {
    "day": 117,
    "living": 40,
    "mort.rate": 0
  },
  {
    "day": 118,
    "living": 40,
    "mort.rate": 0
  },
  {
    "day": 119,
    "living": 40,
    "mort.rate": 0.025
  },
  {
    "day": 120,
    "living": 39,
    "mort.rate": 0.0513
  },
  {
    "day": 121,
    "living": 37,
    "mort.rate": 0.027
  },
  {
    "day": 122,
    "living": 36,
    "mort.rate": 0.0833
  },
  {
    "day": 123,
    "living": 33,
    "mort.rate": 0
  },
  {
    "day": 124,
    "living": 33,
    "mort.rate": 0.0606
  },
  {
    "day": 125,
    "living": 31,
    "mort.rate": 0.0968
  },
  {
    "day": 126,
    "living": 28,
    "mort.rate": 0.1071
  },
  {
    "day": 127,
    "living": 25,
    "mort.rate": 0.04
  },
  {
    "day": 128,
    "living": 24,
    "mort.rate": 0.0417
  },
  {
    "day": 129,
    "living": 23,
    "mort.rate": 0.087
  },
  {
    "day": 130,
    "living": 21,
    "mort.rate": 0
  },
  {
    "day": 131,
    "living": 21,
    "mort.rate": 0
  },
  {
    "day": 132,
    "living": 21,
    "mort.rate": 0.0476
  },
  {
    "day": 133,
    "living": 20,
    "mort.rate": 0
  },
  {
    "day": 134,
    "living": 20,
    "mort.rate": 0
  },
  {
    "day": 135,
    "living": 20,
    "mort.rate": 0
  },
  {
    "day": 136,
    "living": 20,
    "mort.rate": 0.05
  },
  {
    "day": 137,
    "living": 19,
    "mort.rate": 0
  },
  {
    "day": 138,
    "living": 19,
    "mort.rate": 0
  },
  {
    "day": 139,
    "living": 19,
    "mort.rate": 0
  },
  {
    "day": 140,
    "living": 19,
    "mort.rate": 0
  },
  {
    "day": 141,
    "living": 19,
    "mort.rate": 0.1053
  },
  {
    "day": 142,
    "living": 17,
    "mort.rate": 0.0588
  },
  {
    "day": 143,
    "living": 16,
    "mort.rate": 0.125
  },
  {
    "day": 144,
    "living": 14,
    "mort.rate": 0
  },
  {
    "day": 145,
    "living": 14,
    "mort.rate": 0.1429
  },
  {
    "day": 146,
    "living": 12,
    "mort.rate": 0.0833
  },
  {
    "day": 147,
    "living": 11,
    "mort.rate": 0.0909
  },
  {
    "day": 148,
    "living": 10,
    "mort.rate": 0.1
  },
  {
    "day": 149,
    "living": 9,
    "mort.rate": 0
  },
  {
    "day": 150,
    "living": 9,
    "mort.rate": 0.1111
  },
  {
    "day": 151,
    "living": 8,
    "mort.rate": 0
  },
  {
    "day": 152,
    "living": 8,
    "mort.rate": 0
  },
  {
    "day": 153,
    "living": 8,
    "mort.rate": 0.125
  },
  {
    "day": 154,
    "living": 7,
    "mort.rate": 0.1429
  },
  {
    "day": 155,
    "living": 6,
    "mort.rate": 0.1667
  },
  {
    "day": 156,
    "living": 5,
    "mort.rate": 0
  },
  {
    "day": 157,
    "living": 5,
    "mort.rate": 0
  },
  {
    "day": 158,
    "living": 5,
    "mort.rate": 0.2
  },
  {
    "day": 159,
    "living": 4,
    "mort.rate": 0
  },
  {
    "day": 160,
    "living": 4,
    "mort.rate": 0
  },
  {
    "day": 161,
    "living": 4,
    "mort.rate": 0
  },
  {
    "day": 162,
    "living": 4,
    "mort.rate": 0
  },
  {
    "day": 163,
    "living": 4,
    "mort.rate": 0
  },
  {
    "day": 164,
    "living": 4,
    "mort.rate": 0.5
  },
  {
    "day": 165,
    "living": 2,
    "mort.rate": 0
  },
  {
    "day": 166,
    "living": 2,
    "mort.rate": 0
  },
  {
    "day": 167,
    "living": 2,
    "mort.rate": 0
  },
  {
    "day": 168,
    "living": 2,
    "mort.rate": 0
  },
  {
    "day": 169,
    "living": 2,
    "mort.rate": 0
  },
  {
    "day": 170,
    "living": 2,
    "mort.rate": 0
  },
  {
    "day": 171,
    "living": 2,
    "mort.rate": 1
  },
  {
    "day": 172,
    "living": 0,
    "mort.rate": "*"
  }
]

export default flies;
