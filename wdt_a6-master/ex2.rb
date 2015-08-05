numbers = [323, 2313, -312321, 3214321]

def findMax(number_array)
  currentMax = 0
  number_array.each do |num|
  if(currentMax < num)
  currentMax = num
    end
  end
  return currentMax
end

 puts findMax(numbers)
