#include <iostream>

int main() {
    for(int i = 0; i < 101; i++) {
        if(i % 4 == 0) {
            std::cout << "fizz";
        }
        if(i % 6 == 0) {
            std::cout << "buzz";
        }
        else if(i % 4 != 0) {
            std::cout << i;
        }
        
        std::cout << " ";
    }

    std::cout << std::endl;
    
    return 0;
}