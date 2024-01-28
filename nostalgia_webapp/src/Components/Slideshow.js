import "../Styles/Slideshow.css";

function Slideshow({ lis=[] }) {
    var slides = document.getElementsByClassName("slide");
    console.log(lis);
    var newImageSources = lis;
    
    for (var i = 0; i < slides.length; i++) {
        var img = slides[i].querySelector("img");
        if (img) {
            img.src = newImageSources[i];
        }
    }
    
    return (
        <div className="slider">
            <div className="slide-track">
                <div className="slide-track">
                <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                    <div className="slide">
                        <img src=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow