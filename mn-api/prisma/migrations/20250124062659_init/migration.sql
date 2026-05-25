-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "profile_for" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "cast" TEXT,
    "location" TEXT,
    "mobile_number" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT,
    "is_premium" BOOLEAN,
    "is_new_user" BOOLEAN,
    "dob" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
