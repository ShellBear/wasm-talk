#include <stdio.h>
#include <unistd.h>

int main()
{
    for (int i = 0; i <= 42; i++) {
        if (i % 2 == 0)
            printf("%d est pair\n", i);
        else
            printf("%d est impair\n", i);
        sleep(1);
    }

    return 0;
}
