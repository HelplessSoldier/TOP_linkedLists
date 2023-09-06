const { Node, LinkedList } = require("./linkedList");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList("head");
    list.append("node1");
    list.append("node2");
    list.prepend("node0");
  });

  it("should have the correct size", () => {
    expect(list.size()).toBe(4);
  });

  it("should have the correct head", () => {
    expect(list.getHead().value).toBe("node0");
  });

  it("should have the correct tail", () => {
    expect(list.getTail().value).toBe("node2");
  });

  it("should return the correct value at a given index", () => {
    expect(list.at(0)).toBe("node0");
    expect(list.at(1)).toBe("head");
    expect(list.at(2)).toBe("node1");
    expect(list.at(3)).toBe("node2");
  });

  it("should throw an error for an out-of-bounds index", () => {
    expect(() => list.at(4)).toThrow("Index out of bounds");
  });

  it("should contain a specific value", () => {
    expect(list.contains("node0")).toBe(true);
    expect(list.contains("head")).toBe(true);
    expect(list.contains("node2")).toBe(true);
    expect(list.contains("non-existent")).toBe(false);
  });

  it("should find the index of a specific value", () => {
    expect(list.find("node0")).toBe(0);
    expect(list.find("head")).toBe(1);
    expect(list.find("node2")).toBe(3);
    expect(list.find("non-existent")).toBe(null);
  });

  it("should insert a value at a specific index", () => {
    list.insertAt("inserted", 2);
    expect(list.size()).toBe(5);
    expect(list.at(2)).toBe("inserted");
  });

  it("should remove a value at a specific index", () => {
    list.removeAt(2);
    expect(list.size()).toBe(3);
    expect(list.at(2)).toBe("node2");
  });

  it("should convert the linked list to a string", () => {
    const expectedString = "(node0) -> (head) -> (node1) -> (node2)";
    expect(list.toString()).toBe(expectedString);
  });
});
