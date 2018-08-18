// Multiples of 3 and 5
// Problem 1
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
public class P001
{
    public static int SumMultiples(int[] numbers, int max)
    {
        int sum = 0;

        if ( numbers.length > 0 )
        {
            for (int i = 1; i < max; i++)
            {
                for (int n : numbers)
                {
                    if ( i % n == 0 )
                    {
                        sum += i;
                        break;
                    }
                }
            }
        }

        return sum;
    }

    public static void main(String[] args)
    {
        int[] ary0 = { };
        int[] ary1 = { 3 };
        int[] ary2 = { 5 };
        int[] ary3 = { 3, 5 };
        System.out.println( SumMultiples(ary0, 10) == 0 );
        System.out.println( SumMultiples(ary1, 10) == 18 );
        System.out.println( SumMultiples(ary2, 10) == 5 );
        System.out.println( SumMultiples(ary3, 10) == 23 );
        System.out.println( SumMultiples(ary3, 1000) == 233168 );
    }
}