import Post from "common/Post.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";

export default {
	'/': import("../common/Home.tsx"),
	'/post/:id': (_, { id }) => Post(+id)
} satisfies Entrypoint;