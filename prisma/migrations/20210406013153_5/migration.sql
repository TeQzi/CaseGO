-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT,
    "password" TEXT,
    "balance" REAL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Players" ("id", "nickname", "balance", "password") SELECT "id", "nickname", "balance", "password" FROM "Players";
DROP TABLE "Players";
ALTER TABLE "new_Players" RENAME TO "Players";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
