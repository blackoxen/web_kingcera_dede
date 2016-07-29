<li class="nav_lev1">
		    	<a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a>
		        <div class="dh">
		        	<ul class="nav_ul2">
        		        {dede:channel type='son' noself='yes'} 
        		        <li class="nav_lev2">
        		        	<a href="[field:typeurl/]">[field:typename/]</a>
        		        </li>        		        
        		        {/dede:channel}
		        	</ul>
		        </div>
		    
		    </li>