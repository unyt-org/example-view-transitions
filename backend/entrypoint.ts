import Post from "common/Post.tsx";
import { type Entrypoint } from "uix/providers/entrypoints.ts";

export default {
	'/': import("common/Home.tsx"),
	'/post/:id': (_, { id }) => Post(+id)
} satisfies Entrypoint;