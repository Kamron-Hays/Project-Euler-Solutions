#include <stdio.h>

/*
 * Multiples of 3 and 5
 * Problem 1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
int SumMultiples(int *numbers, int size, int max)
{
    int i, j;
    int sum = 0;

    if ( numbers != NULL )
    {
        for (i = 1; i < max; i++)
        {
            for (j = 0; j < size; j++)
            {
                if ( i % numbers[j] == 0 )
                {
                    sum += i;
                    break;
                }
            }
        }
    }

    return sum;
}

int main(void)
{
    int ary1[] = { 3 };
    int ary2[] = { 5 };
    int ary3[] = { 3, 5 };
    printf("%s\n", SumMultiples(NULL, 0, 10) == 0 ? "pass" : "fail");
    printf("%s\n", SumMultiples(ary1, 1, 10) == 18 ? "pass" : "fail");
    printf("%s\n", SumMultiples(ary2, 1, 10) == 5 ? "pass" : "fail");
    printf("%s\n", SumMultiples(ary3, 2, 10) == 23 ? "pass" : "fail");
    printf("%s\n", SumMultiples(ary3, 2, 1000) == 233168 ? "pass" : "fail");
    return 0;
}
