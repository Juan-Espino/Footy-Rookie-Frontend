// import Trophy from "./assets/Icons/Trophy";
// import TrophyImg from "./assets/Icons/Trophy.svg";
import img from "./assets/sample.jfif";

function App() {
	return (
		<div className="h-screen w-screen flex justify-center align-middle">
			<section id="icon-block" className="self-center size-64">
				<img src={img} className="" />
				<div id="reflection" className="relative ">
					{/* <Trophy /> */}
					<img src={img} className="-scale-y-[1] opacity-20  " />
					<div
						id="overlay"
						className="absolute top-0 left-0 size-64 bg-gradient-to-t from-white from-60%	"
					>
						{/* .overlay { 
    position:absolute; top:0px; left:0px; width:78px; height:120px;
    background-image: -moz-linear-gradient( center bottom, rgb(255,255,255) 60%, rgba(255,255,255,0) 75%);
    background-image: -o-linear-gradient( rgba(255,255,255,0) 25%, rgb(255,255,255) 40%);
    background-image: -webkit-gradient( linear, left bottom, left top, color-stop(0.60, rgb(255,255,255)), color-stop(0.75, rgba(255,255,255,0)));
    filter: progid:DXImageTransform.Microsoft.Gradient( gradientType=0, startColor=0, EndColorStr=#ffffff); */}
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
