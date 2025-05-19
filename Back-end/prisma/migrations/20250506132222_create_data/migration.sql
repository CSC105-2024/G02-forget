/*
  Warnings:

  - You are about to drop the column `userId` on the `Template` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Template" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bgColor" TEXT NOT NULL DEFAULT 'white',
    "bg2Color" TEXT NOT NULL DEFAULT 'white',
    "navColor" TEXT NOT NULL DEFAULT 'white'
);
INSERT INTO "new_Template" ("bg2Color", "bgColor", "id", "navColor") SELECT "bg2Color", "bgColor", "id", "navColor" FROM "Template";
DROP TABLE "Template";
ALTER TABLE "new_Template" RENAME TO "Template";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL DEFAULT 'white',
    "bg2Color" TEXT NOT NULL DEFAULT 'white',
    "navColor" TEXT NOT NULL DEFAULT 'white'
);
INSERT INTO "new_User" ("email", "id", "password", "username") SELECT "email", "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
