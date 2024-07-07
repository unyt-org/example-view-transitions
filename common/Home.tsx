import List from "common/List.ts";

export default 
	<main>
		<h1>Home</h1>
		<div class="container">
			{List.map((entry, index) => <a href={`/post/${index}`}>
				<img src={entry.image}/>
				<div>
					<h2>{entry.sender}</h2>
					<span>{entry.text}</span>
				</div>
			</a>)}
		</div>
	</main>;