set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"createdAt" timestamptz(6) not null default now(),
	"avaterUrl" TEXT,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."messages" (
	"messageId" serial NOT NULL,
	"email" TEXT NOT NULL,
	"sender" TEXT NOT NULL,
	"msgTitle" TEXT,
	"content" TEXT NOT NULL,
	"createdAt" timestamptz(6) not null default now(),
	CONSTRAINT "message_pk" PRIMARY KEY ("messageId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."posts" (
	"postId" serial NOT NULL,
	"userId" integer NOT NULL,
	"title" TEXT NOT NULL,
	"createdAt" timestamptz(6) not null default now(),
	"content" TEXT NOT NULL,
	"imageUrl" TEXT,
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
