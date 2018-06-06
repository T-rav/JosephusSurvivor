describe("SurvivorGame", function () {
	describe("play",function(){
		it("Given 1 person, expect xit is survior", function() {
			// arrange
			let totalPeople = 1;
			let stepSize = 1;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(1);
		});

		it("Given 2 person wxith step size 1, 2nd person survivor", function() {
			// arrange
			let totalPeople = 2;
			let stepSize = 1;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(2);
		});

		it("Given 3 person wxith step size 1, 1st person survivor", function() {
			// arrange
			let totalPeople = 3;
			let stepSize = 1;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(3);
		});

		it("Given 3 person wxith step size 2, 1st person survivor", function() {
			// arrange
			let totalPeople = 3;
			let stepSize = 2;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(3);
		});
		// NOTE: to be the last 2 test too way too much debugging for my liking.
		// should have made learning test to better focus on what needs to be built
		it("Given 7 persons wxith step size 3, expect 4th person survivor", function() {
			// arrange
			let totalPeople = 7;
			let stepSize = 3;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(4);
		});

		it("Given 9 persons wxith step size 3, expect 1st person survivor", function() {
			// arrange
			let totalPeople = 9;
			let stepSize = 3;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(1);
		});

		it("Given 5 persons wxith step size 2, expect 1st person survivor", function() {
			// arrange
			let totalPeople = 5;
			let stepSize = 2;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(3);
		});

		it("Given 5 persons with step size 4, expect 1st person survivor", function() {
			// arrange
			let totalPeople = 5;
			let stepSize = 4;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(1);
		});
	});
});
