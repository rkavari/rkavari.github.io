<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Products</title>
	<link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <a class="logo" href="index.md"><i>Muddy Paws</i> <b>Adventure Gear</b></a>
	  <div class="navbar">
      <a class="home" href="index.md">Home</a>
      <a class="active products" href="products.html">Products</a>
      <a class="about" href="about.html">About</a>
      <a class="contact" href="contact.html">Contact</a>
    </div>
    <div class=productStatus></div>
    <div class=breadcrumb1>
        <a href="products.html" class="bcProducts">Products</a>
        <p class="arrow1"> > </p>
        <p class="bcCatHarness">Cat Harness</p>
    </div>
    <h1 class="chHeading">Cat Harness</h1>
    <img src="photos/catharness.jpg" class="catHarnessDetailsPhoto" alt="">
    <p class="catHarnessDesc">This harness is so comfortable that your cat will want<br>to wear it all the time. Don’t believe us? Buy and see.</p>
    <p class="chCost">$25</p>
    <div class="size">
        <p class="sizeHeading">Size</p>
        <div class="tSizeContainer">
            <p class="size">T</p>
        </div>
        <div class="sSizeContainer">
            <p class="size">S</p>
        </div>
        <div class="mSizeContainer">
            <p class="size">M</p>
        </div>
        <div class="lSizeContainer">
            <p class="size">L</p>
        </div>
    </div>
    <p class="sizeGuide">View Size Guide</p>
    <div class="color">
        <p class="colorHeading">Color</p>
        <div class="circle2 strawberry"></div>
        <div class="circle2 blackBerry"></div>
        <div class="circle2 crazyBerry"></div>
        <div class="circle2 fireOrange"></div>
    </div>
    <input type="button" id="chAddToCart" value="Add to Cart">