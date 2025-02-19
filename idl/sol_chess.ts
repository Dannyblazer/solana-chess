export type SolChess = {
  version: "0.1.0";
  name: "sol_chess";
  instructions: [
    {
      name: "initializeUser";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "initializeGame";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "wager";
          type: {
            option: "u64";
          };
        },
        {
          name: "isRated";
          type: "bool";
        }
      ];
    },
    {
      name: "joinGame";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "color";
          type: {
            defined: "Color";
          };
        }
      ];
    },
    {
      name: "movePiece";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "adversaryUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "from";
          type: {
            defined: "Square";
          };
        },
        {
          name: "to";
          type: {
            defined: "Square";
          };
        }
      ];
    }, 
    {
      name: "deposit";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdraw";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "leaveGame";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "resign";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "adversaryUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "offerDraw";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "adversaryUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "game";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "game";
      type: {
        kind: "struct";
        fields: [
          {
            name: "board";
            type: {
              defined: "Board";
            };
          },
          {
            name: "gameState";
            type: {
              defined: "GameState";
            };
          },
          {
            name: "white";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "black";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "enpassant";
            type: {
              option: {
                defined: "Square";
              };
            };
          },
          {
            name: "castlingRight";
            type: {
              defined: "CastlingRight";
            };
          },
          {
            name: "wager";
            type: {
              option: "u64";
            };
          },
          {
            name: "drawState";
            type: {
              defined: "DrawState";
            };
          },
          {
            name: "createdAt";
            type: "i64";
          },
          {
            name: "isRated";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "user";
      type: {
        kind: "struct";
        fields: [
          {
            name: "currentGame";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "elo";
            type: "u32";
          },
          {
            name: "games";
            type: "u64";
          },
          {
            name: "balance";
            type: "u64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Board";
      type: {
        kind: "struct";
        fields: [
          {
            name: "board";
            type: {
              array: [
                {
                  array: [
                    {
                      defined: "Piece";
                    },
                    8
                  ];
                },
                8
              ];
            };
          }
        ];
      };
    },
    {
      name: "CastlingRight";
      type: {
        kind: "struct";
        fields: [
          {
            name: "whiteKingside";
            type: "bool";
          },
          {
            name: "whiteQueenside";
            type: "bool";
          },
          {
            name: "blackKingside";
            type: "bool";
          },
          {
            name: "blackQueenside";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "Square";
      type: {
        kind: "struct";
        fields: [
          {
            name: "rank";
            type: "u8";
          },
          {
            name: "file";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "TimeControl";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lastMove";
            type: "i64";
          },
          {
            name: "whiteTimer";
            type: "i64";
          },
          {
            name: "blackTimer";
            type: "i64";
          },
          {
            name: "increment";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "Color";
      type: {
        kind: "enum";
        variants: [
          {
            name: "White";
          },
          {
            name: "Black";
          }
        ];
      };
    },
    {
      name: "DrawState";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Neither";
          },
          {
            name: "White";
          },
          {
            name: "Black";
          },
          {
            name: "Draw";
          }
        ];
      };
    },
    {
      name: "GameState";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Waiting";
          },
          {
            name: "White";
          },
          {
            name: "Black";
          },
          {
            name: "WhiteWon";
          },
          {
            name: "BlackWon";
          },
          {
            name: "Draw";
          }
        ];
      };
    },
    {
      name: "Piece";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Empty";
          },
          {
            name: "BlackPawn";
          },
          {
            name: "BlackRook";
          },
          {
            name: "BlackKnight";
          },
          {
            name: "BlackBishop";
          },
          {
            name: "BlackQueen";
          },
          {
            name: "BlackKing";
          },
          {
            name: "WhitePawn";
          },
          {
            name: "WhiteRook";
          },
          {
            name: "WhiteKnight";
          },
          {
            name: "WhiteBishop";
          },
          {
            name: "WhiteQueen";
          },
          {
            name: "WhiteKing";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "UserAlreadyInGame";
      msg: "User Already In Game";
    },
    {
      code: 6001;
      name: "ColorNotAvailable";
      msg: "Color Not Available";
    },
    {
      code: 6002;
      name: "InvalidGameState";
      msg: "Invalid Game State";
    },
    {
      code: 6003;
      name: "NotUsersTurn";
      msg: "Not User's Turn";
    },
    {
      code: 6004;
      name: "InvalidMove";
      msg: "Invalid Move";
    },
    {
      code: 6005;
      name: "KingInCheck";
      msg: "King in Check";
    },
    {
      code: 6006;
      name: "InsufficientBalance";
      msg: "Insufficient Balance";
    },
    {
      code: 6007;
      name: "NotInGame";
      msg: "Not In Game";
    },
    {
      code: 6008;
      name: "GameAlreadyStarted";
      msg: "Game Already Started";
    },
    {
      code: 6009;
      name: "InvalidAdversaryUserAccount";
      msg: "Invalid Adversary User Account";
    },
    {
      code: 6010;
      name: "AlreadyInGame";
      msg: "User Already In Game";
    },
    {
      code: 6011;
      name: "AlreadyOfferedDraw";
      msg: "Already Offered Draw";
    }
  ];
};

export const IDL: SolChess = {
  version: "0.1.0",
  name: "sol_chess",
  instructions: [
    {
      name: "initializeUser",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initializeGame",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "wager",
          type: {
            option: "u64",
          },
        },
        {
          name: "isRated",
          type: "bool",
        },
      ],
    },
    {
      name: "joinGame",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "color",
          type: {
            defined: "Color",
          },
        },
      ],
    },
    {
      name: "movePiece",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "adversaryUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "from",
          type: {
            defined: "Square",
          },
        },
        {
          name: "to",
          type: {
            defined: "Square",
          },
        },
      ],
    },
    {
      name: "deposit",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdraw",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "leaveGame",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "resign",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "adversaryUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "offerDraw",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "adversaryUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "game",
      type: {
        kind: "struct",
        fields: [
          {
            name: "board",
            type: {
              defined: "Board",
            },
          },
          {
            name: "gameState",
            type: {
              defined: "GameState",
            },
          },
          {
            name: "white",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "black",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "enpassant",
            type: {
              option: {
                defined: "Square",
              },
            },
          },
          {
            name: "castlingRight",
            type: {
              defined: "CastlingRight",
            },
          },
          {
            name: "wager",
            type: {
              option: "u64",
            },
          },
          {
            name: "drawState",
            type: {
              defined: "DrawState",
            },
          },
          {
            name: "createdAt",
            type: "i64",
          },
          {
            name: "isRated",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "user",
      type: {
        kind: "struct",
        fields: [
          {
            name: "currentGame",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "elo",
            type: "u32",
          },
          {
            name: "games",
            type: "u64",
          },
          {
            name: "balance",
            type: "u64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "Board",
      type: {
        kind: "struct",
        fields: [
          {
            name: "board",
            type: {
              array: [
                {
                  array: [
                    {
                      defined: "Piece",
                    },
                    8,
                  ],
                },
                8,
              ],
            },
          },
        ],
      },
    },
    {
      name: "CastlingRight",
      type: {
        kind: "struct",
        fields: [
          {
            name: "whiteKingside",
            type: "bool",
          },
          {
            name: "whiteQueenside",
            type: "bool",
          },
          {
            name: "blackKingside",
            type: "bool",
          },
          {
            name: "blackQueenside",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "Square",
      type: {
        kind: "struct",
        fields: [
          {
            name: "rank",
            type: "u8",
          },
          {
            name: "file",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "TimeControl",
      type: {
        kind: "struct",
        fields: [
          {
            name: "lastMove",
            type: "i64",
          },
          {
            name: "whiteTimer",
            type: "i64",
          },
          {
            name: "blackTimer",
            type: "i64",
          },
          {
            name: "increment",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "Color",
      type: {
        kind: "enum",
        variants: [
          {
            name: "White",
          },
          {
            name: "Black",
          },
        ],
      },
    },
    {
      name: "DrawState",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Neither",
          },
          {
            name: "White",
          },
          {
            name: "Black",
          },
          {
            name: "Draw",
          },
        ],
      },
    },
    {
      name: "GameState",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Waiting",
          },
          {
            name: "White",
          },
          {
            name: "Black",
          },
          {
            name: "WhiteWon",
          },
          {
            name: "BlackWon",
          },
          {
            name: "Draw",
          },
        ],
      },
    },
    {
      name: "Piece",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Empty",
          },
          {
            name: "BlackPawn",
          },
          {
            name: "BlackRook",
          },
          {
            name: "BlackKnight",
          },
          {
            name: "BlackBishop",
          },
          {
            name: "BlackQueen",
          },
          {
            name: "BlackKing",
          },
          {
            name: "WhitePawn",
          },
          {
            name: "WhiteRook",
          },
          {
            name: "WhiteKnight",
          },
          {
            name: "WhiteBishop",
          },
          {
            name: "WhiteQueen",
          },
          {
            name: "WhiteKing",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "UserAlreadyInGame",
      msg: "User Already In Game",
    },
    {
      code: 6001,
      name: "ColorNotAvailable",
      msg: "Color Not Available",
    },
    {
      code: 6002,
      name: "InvalidGameState",
      msg: "Invalid Game State",
    },
    {
      code: 6003,
      name: "NotUsersTurn",
      msg: "Not User's Turn",
    },
    {
      code: 6004,
      name: "InvalidMove",
      msg: "Invalid Move",
    },
    {
      code: 6005,
      name: "KingInCheck",
      msg: "King in Check",
    },
    {
      code: 6006,
      name: "InsufficientBalance",
      msg: "Insufficient Balance",
    },
    {
      code: 6007,
      name: "NotInGame",
      msg: "Not In Game",
    },
    {
      code: 6008,
      name: "GameAlreadyStarted",
      msg: "Game Already Started",
    },
    {
      code: 6009,
      name: "InvalidAdversaryUserAccount",
      msg: "Invalid Adversary User Account",
    },
    {
      code: 6010,
      name: "AlreadyInGame",
      msg: "User Already In Game",
    },
    {
      code: 6011,
      name: "AlreadyOfferedDraw",
      msg: "Already Offered Draw",
    },
  ],
};
