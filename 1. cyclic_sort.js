function cyclic_sort(nums) {
	let i = 0;
	while (i < nums.length) {
		const j = nums[i] - 1;
		if (nums[i] !== nums[j]) {
			// swap
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}
	return nums;
}

console.log(cyclic_sort([3, 1, 5, 4, 2]));
console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));
console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));

//Output
/* [1, 2, 3, 4, 5]
[(1, 2, 3, 4, 5, 6)]
[(1, 2, 3, 4, 5, 6)]; */
