var assert = require("assert");
var jppr = require("./index")

describe( "a better jp phone regex", function() {
  describe("fixed phones", function() {

    it("should match to valid fixed phone numbers", function() {
      assert.equal(true, jppr.fixed.test("03-1111-1111"));
      assert.equal(true, jppr.fixed.test("044-111-1111"));
      assert.equal(true, jppr.fixed.test("0466-11-1111"));
      assert.equal(true, jppr.fixed.test("01267-1-1111"));
    })

    it("should ignore hyphens", function() {
      assert.equal(true, jppr.fixed.test("039999-1111"));
      assert.equal(true, jppr.fixed.test("03-11119999"));
      assert.equal(true, jppr.fixed.test("0312345678"));
    })

    it("should not match to invalid fixed phone numbers", function() {
      assert.equal(false, jppr.fixed.test("03-111-1111"));
      assert.equal(false, jppr.fixed.test("045-1111-1111"));
      assert.equal(false, jppr.fixed.test("1111-11-111"));
      assert.equal(false, jppr.fixed.test("03-0111-1111")); // 030-* is invalid
    })

  })

  describe("mobile phones", function() {
    it("should match to valid fixed phone numbers", function() {
      assert.equal(true, jppr.mobile.test("090-1111-1111"));
      assert.equal(true, jppr.mobile.test("070-1111-1111"));
    })

    it("should not match to invalid fixed phone numbers", function() {
      assert.equal(false, jppr.mobile.test("090-111-1111"));
      assert.equal(false, jppr.mobile.test("070-11111-1111"));
      assert.equal(false, jppr.mobile.test("03-1111-1111"));
    })
  })

  describe("ip phones", function() {
    it("should match to valid fixed phone numbers", function() {
      assert.equal(true, jppr.ip.test("050-1111-1111"));
    })

    it("should not match to invalid fixed phone numbers", function() {
      assert.equal(false, jppr.ip.test("050-111-1111"));
      assert.equal(false, jppr.ip.test("010-11111-1111"));
    })
  })

  describe("all", function() {
    it("should match to valid fixed phone numbers", function() {
      assert.equal(true, jppr.all.test("050-1111-1111"));
      assert.equal(true, jppr.all.test("090-1111-1111"));
    })

    it("should not match to invalid fixed phone numbers", function() {
      assert.equal(false, jppr.all.test("111-1111"));
      assert.equal(false, jppr.all.test("11-1111-1111"));
      assert.equal(false, jppr.all.test("050-111-1111"));
      assert.equal(false, jppr.all.test("010-11111-1111"));
      assert.equal(false, jppr.all.test("020-1111-1111"));
    })

    it("should ignore missing hyphens", function() {
      assert.equal(true, jppr.all.test("039999-1111"));
      assert.equal(true, jppr.all.test("0501111-1111"));
      assert.equal(true, jppr.all.test("01267-1-1111"));
    })

    it("should not ignore extra hyphens", function() {
      assert.equal(false, jppr.all.test("0-39999-1111"));
      assert.equal(false, jppr.all.test("0501-111-1111"));
      assert.equal(false, jppr.all.test("0126711-111"));
    })

  })

})
