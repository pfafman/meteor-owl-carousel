Meteor Owl Carousel
===================

### Intro
This is a packaging of [owl-carousel](https://github.com/OwlFonk/OwlCarousel) for [Meteor](http://http://www.meteor.com) with some modifications.  

See the [owl-carousel site for info](http://owlgraphic.com/owlcarousel/).

Probably should be re-written as a pure Meteor package that makes use of what Meteor has to offer instead of hacking the owl-carousel package to work with Meteor.

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

### Modifications

Added a callback for getting the image src on lazyload

	lazyLoadCallback: (img) ->
        ...

Modified the afterLazyLoad callback to pass the elm as a second argument



	afterLazyLoad: (base, elm) ->
		...
	
You can then use these to pull the image src from the database via meteor and use the afterLazyLoad to make some changes to image visibility.	
