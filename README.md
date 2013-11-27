Meteor Owl Carousel
===================

### Intro
This is a packaging of [owl-carousel](https://github.com/OwlFonk/OwlCarousel) for [Meteor](http://http://www.meteor.com).  

See the [owl-carousel site for info](http://owlgraphic.com/owlcarousel/).

## Installation

* Pre-Install [Meteorite](https://github.com/oortcloud/meteorite) to use [Atmosphere](https://atmosphere.meteor.com)

```sh
	[sudo] npm install -g meteorite
```

Note this is not on Atmosphere yet.  You can add it if you want by editing your meteor upper level smart.json file with a "git" entry:

```
{
	"packages": {
    	"owl-carousel": {
        	"git": "https://github.com/pfafman/meteor-owl-carousel.git"
    	},
    	....
   	}
}
```
and then run meteorite to install.

```
	mrt add owl-carousel
```

