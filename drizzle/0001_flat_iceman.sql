CREATE TABLE `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`postId` text NOT NULL,
	`userId` text NOT NULL,
	`body` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `favorites` (
	`id` integer NOT NULL,
	`userId` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `follows` (
	`userId` text NOT NULL,
	`followedId` text NOT NULL,
	PRIMARY KEY(`followedId`, `userId`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`followedId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `votes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text NOT NULL,
	`postId` text NOT NULL,
	`isLiked` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `comments_userIdx` ON `comments` (`userId`);--> statement-breakpoint
CREATE INDEX `comments_postIdx` ON `comments` (`postId`);--> statement-breakpoint
CREATE INDEX `favorites_userIdx` ON `favorites` (`userId`);--> statement-breakpoint
CREATE INDEX `follows_userIdx` ON `follows` (`userId`);--> statement-breakpoint
CREATE INDEX `follows_followedIdx` ON `follows` (`followedId`);--> statement-breakpoint
CREATE INDEX `posts_userIdx` ON `posts` (`userId`);--> statement-breakpoint
CREATE INDEX `votes_userIdx` ON `votes` (`userId`);--> statement-breakpoint
CREATE INDEX `votes_postIdx` ON `votes` (`postId`);