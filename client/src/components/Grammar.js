import React,{Component} from 'react';
import './Grammar.scss';
import $ from 'jquery';

$(document).ready(function() {
	var oldId = null;

	$('.tabs-controls__link').click(function(e) {
		e.preventDefault();

		if ($(this).hasClass('tabs-controls__link--active')) {
			return false;
		}

		var currentId = parseInt($(this).data('id'), 10);
		$('.tabs-controls__link--active').removeClass('tabs-controls__link--active');
		$(this).addClass('tabs-controls__link--active');

		if (currentId < oldId) { // item is hidden
			var timing = $('.card.hidden').length * 100;
			$('.carding').each(function(index) {
				if (index > (currentId - 1 ) || index == (currentId - 1)) {
					window.setTimeout(function() {
						$('.carding').eq(index).removeClass('hidden');
					}, timing - (index * 100));
				}
			});
		} else {
			$('.carding').each(function(index) {
				if (index < (currentId - 1)) {
					window.setTimeout(function() {
						$('.carding').eq(index).addClass('hidden');
					}, index * 100);
				}
			});
		}

		oldId = currentId;
	});
});


class Grammar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <section class="page">
	<section>
		<ul class="tabs-controls">
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link tabs-controls__link--active" data-id="1">
					Tab A
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="2">
					Tab B
			  </a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="3">
					Tab C
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="4">
					Tab D
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="5">
					Tab E
				</a>
			</li>
			<li class="tabs-controls__item">
				<a href="#" class="tabs-controls__link" data-id="6">
					Tab F
				</a>
			</li>
		</ul>
	</section>
	<section class="cards-container">
		<div class="carding card--current" id="1">
			<h1>A. Lorem ipsum dolor sit amet</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
		</div>
		<div class="carding" id="2">
			<h1>B. Elit, sed do eiusmod</h1>
			<p>
				Elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
		</div>
		<div class="carding" id="3">
			<h1>C. Consectetur adipisicing elit</h1>
			<p>
				Consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
		</div>
		<div class="carding" id="4">
			<h1>D. Sed do eiusmod</h1>
			<p>
				Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrcaecat cupidatat nonv proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<div class="carding" id="5">
			<h1>E. Ut enim ad minim veniam</h1>
			<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in vo cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<div class="carding" id="6">
			<h1>F. Labore et dolore magna aliqua</h1>
			<p>
				Labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in volupest laborum.
			</p>
		</div>
	</section>
</section>
</div>
        )
    }
}

export default Grammar;