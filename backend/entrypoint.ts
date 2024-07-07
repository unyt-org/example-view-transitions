/**
 * Backend entrypoint:
 * This module provides a default export that defines the UI that is returned from the backend
 * when a page is visited
 */

import Post from "common/Post.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";

export default {
	'/': import("../common/Home.tsx"),
	'/post/:id': (_, { id }) => Post(+id)
} satisfies Entrypoint;