-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Diary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "day" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 0,
    "topic" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "lock" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Diary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Diary" ("content", "day", "emoji", "id", "lock", "month", "topic", "userId") SELECT "content", "day", "emoji", "id", "lock", "month", "topic", "userId" FROM "Diary";
DROP TABLE "Diary";
ALTER TABLE "new_Diary" RENAME TO "Diary";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
