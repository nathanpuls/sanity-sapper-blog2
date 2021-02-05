<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid lightgray;
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 4px;
		background-color: #008acb;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	#logo {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-weight: 700;
		color: #008acb;
	}
</style>

<nav>
	<ul>
		<li id='logo'>Nathan Puls</li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>Blog</a></li>
	</ul>
</nav>