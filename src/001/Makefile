C_BIN=c_soln
CPP_BIN=cpp_soln
J_BIN=P001

all: $(C_BIN) $(CPP_BIN) $(J_BIN)
	@./$(C_BIN)
	@./$(CPP_BIN)
	@java $(J_BIN)
	@$(MAKE) -s clean

$(C_BIN): 001.c
	@gcc $< -o $@

$(CPP_BIN): 001.cpp
	@g++ $< -std=c++11 -o $@

$(J_BIN): P001.java
	@javac $<

clean:
	@rm -f $(C_BIN) $(CPP_BIN) $(J_BIN).class
