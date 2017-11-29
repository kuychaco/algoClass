class Test {
  d(description) {
    this.description = description
    return this
  }

  a(arr) {
    this.argument = arr
    return this
  }

  e(arr) {
    this.expected = arr
    return this
  }

  static case() {
    return new Test()
  }
}

function sortTest(alg) {
  const cases = [
    Test.case()
      .d('Empty')
      .a([])
      .e([]),
    Test.case()
      .d('Single element')
      .a([1])
      .e([1]),
    Test.case()
      .d('Already sorted even')
      .a([1, 2])
      .e([1, 2]),
    Test.case()
      .d('Already sorted odd')
      .a([1, 2, 3])
      .e([1, 2, 3]),
    Test.case()
      .d('Random even')
      .a([2, 4, 3, 1])
      .e([1, 2, 3, 4]),
    Test.case()
      .d('Random odd')
      .a([2, 3, 1])
      .e([1, 2, 3]),
    Test.case()
      .d('Reversed even')
      .a([4, 3, 2, 1])
      .e([1, 2, 3, 4]),
    Test.case()
      .d('Reversed odd')
      .a([3, 2, 1])
      .e([1, 2, 3]),
    Test.case()
      .d('Partially sorted even')
      .a([1, 2, 3, 5, 4, 6])
      .e([1, 2, 3, 4, 5, 6]),
    Test.case()
      .d('Partially sorted odd')
      .a([1, 2, 4, 3, 5])
      .e([1, 2, 3, 4, 5])
  ]

  cases.map(c => {
    test(c.description, () => {
      expect(alg(c.argument)).toEqual(c.expected)
    })
  })
}

module.exports = sortTest
