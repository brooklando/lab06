// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

window.onload = function() {
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  let numbr = randomNumber(0, 10)

}

