class Multiples

  def multiples
    numbers = Array(1..100)
    multiples = Array.new
    for i in numbers
      if i%3 == 0 && i%5 == 0
        puts "fizzbuzz"
      elsif i%5 == 0
        puts "buzz"
      elsif i%3 == 0
        puts "fizz"
      else
        puts i.to_s
      end
    end
    multiples
  end

end

multiples = Multiples.new
multiples(multiples.multiples)
