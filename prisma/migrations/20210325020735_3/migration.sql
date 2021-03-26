-- CreateTable
CREATE TABLE "Skins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "case_id" INTEGER,
    "skin_name" TEXT NOT NULL,
    "market_price" REAL NOT NULL,
    "rare" TEXT NOT NULL,
    "quality" TEXT NOT NULL,
    FOREIGN KEY ("case_id") REFERENCES "Cases" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
