use std::fmt;

struct Structure(i32);
struct Wrapper(Structure, i32, i32);
struct List(Vec<i32>);

impl fmt::Display for Structure {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl fmt::Display for Wrapper {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {}, {})", self.0, self.1, self.2)
    }
}

impl fmt::Display for List {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[")?;
        for (index, val) in self.0.iter().enumerate() {
            if index != 0 { write!(f, ", ")?; }
            write!(f, "{}", val)?;
        }
        write!(f, "]")
    }
}

pub fn main() {
    println!("Sorry to keep you waiting!");
    println!("The {number} thing {verb} to {} me", "guide", number="one", verb="left");
    println!("This struct {} won't print...", Structure(3));
    println!("Hey Hey {}", Wrapper(Structure(55), 5, 5));
    let v = List(vec![6, 16, 55]);
    println!("{}", v);
}