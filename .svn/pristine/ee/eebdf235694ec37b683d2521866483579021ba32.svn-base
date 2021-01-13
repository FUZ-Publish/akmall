(function(){
	var codeview=new Array();
	codeview.push({'url':'../../com/js/cm.jQuery.browser.vers.js', 'cashbuster':true});
	codeview.push({'url':'../../codeview/scripts/shCore.js', 'cashbuster':false});
	codeview.push({'url':'../../codeview/scripts/shAutoloader.js', 'cashbuster':true});
	codeview.push({'url':'../../codeview/scripts/shBrushJScript.js', 'cashbuster':true});
	codeview.push({'url':'../../codeview/scripts/shBrushXml.js', 'cashbuster':true});
	codeview.push({'url':'../../codeview/scripts/shBrushCss.js', 'cashbuster':true});

	for(var a=0, atotal=codeview.length; a<atotal; a++){
		document.write('<script src="'+codeview[a].url+((codeview[a].cashbuster)?'?cb='+window._CACHE_BUSTER:'')+'" charset="utf-8"></'+'script>');		
	};
})();

/** GNB MENU **/
 function gnbBox_init (gnbMU){
	var $topMenu = $('#gnbBox > ul > li');
	$topMenu.eq(gnbMU-1).addClass('on'); 
 }

/** LEFT MENU **/
function lnb_menu(hn,sn){ 
	var $lnb = $('#wgLnb > #lnbArea > ul > li'); 
    var $lnb_depth = $('.lnb2depth > li'); 
	$lnb.eq(hn-1).addClass('on'); 
    $lnb.eq(hn-1).find('.lnb2depth').children().eq(sn-1).addClass('sel'); 
	    $lnb.find('ul').hide(); 
     $lnb.each(function(){ 
        if($(this).hasClass('on')){ 
            if($(this).find('ul')){ 
                $(this).find('ul').slideToggle(300);
			}
		$(this).find('> a').addClass('link_1th_ov'); 
		$(this).find('.sel > a').addClass('link_2th_ov'); 
        } else{
			$(this).find('> a').removeClass('link_1th_ov'); 
			$(this).find('.sel > a').removeClass('link_2th_ov'); 
			}		
    }); 
     $lnb.click(function(){ 
         if($(this).hasClass('on')) 
         $lnb.removeClass('on'); 
        $(this).addClass('on'); 
          
        $lnb.find('ul').slideUp(300); 
 
        if($(this).find('ul')){ 
            $(this).find('ul').slideToggle(300); 
        }
     }); 
 }
/** left menu end **/

/* accordion */
$(document).ready(function(){
$('.acc_container').hide(); //Hide/close all containers
$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

$('.acc_trigger').click(function(){
 if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
  //$('.faq_q').removeClass('active').next().slideUp(); //Remove all .faq_q classes and slide up the immediate next container
  $(this).toggleClass('active').next().slideDown(); //Add .faq_q class to clicked trigger and slide down the immediate next container
 }else {
  $(this).removeClass('active').next().slideUp();
 }
 return false; //Prevent the browser jump to the link anchor
 
});

/* CSS */
$('.optyGrid').css({"opacity":"0.3"});
$('.opty5').css({"opacity":"0.5"});
$('.chkOpty').css({"opacity":"0"});

$("#focus tbody>tr:nth-child(even)").css("background-color","#F5FAFF");

$(function(){
	$("#focus tbody>tr").click(function(){
		// tr.on을 제거
		$("#focus tbody>tr").removeClass("on");		
		// 현재 tr 요소에 'on' 클래스 추가
		var index = $(this).addClass("on").parent().index();
		// alert(index);		
	});
});

});

		
//-----------------------------------------------------
/*****     		   TABLE HOVER  		        *****/
//-----------------------------------------------------
/*
 * jQuery tableHover plugin
 * Version: 0.1.4
 *
 * Copyright (c) 2007 Roman Weich
 * http://p.sohei.org
 *
 * Dual licensed under the MIT and GPL licenses 
 * (This means that you can choose the license that best suits your project, and use it accordingly):
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Changelog: 
 * v 0.1.4 - 2007-12-17
 *	- fix: clicking on a link or child element inside a cell did not set the clickClass on the rows/columns.
 * v 0.1.3 - 2007-09-04
 *	- fix: highlight did not work when the hovered table cell had child elements inside
 * v 0.1.2 - 2007-08-13
 *	- fix/change: changed event binding routine, as is got really slow with jquery 1.1.3.1
 *	-change: added new option "ignoreCols", through which columns can be excluded from the highlighting process
 * v 0.1.1 - 2007-06-05
 *	- fix: errors when using the plugin on a table not having a theader or tfoot
 * v 0.1.0 - 2007-05-31
 */

(function($)
{
	/**
	 * Calculates the actual cellIndex value of all cells in the table and stores it in the realCell property of each cell.
	 * Thats done because the cellIndex value isn't correct when colspans or rowspans are used.
	 * Originally created by Matt Kruse for his table library - Big Thanks! (see http://www.javascripttoolbox.com/)
	 * @param {element} table	The table element.
	 */
	var fixCellIndexes = function(table) 
	{
		var rows = table.rows;
		var len = rows.length;
		var matrix = [];
		for ( var i = 0; i < len; i++ )
		{
			var cells = rows[i].cells;
			var clen = cells.length;
			for ( var j = 0; j < clen; j++ )
			{
				var c = cells[j];
				var rowSpan = c.rowSpan || 1;
				var colSpan = c.colSpan || 1;
				var firstAvailCol = -1;
				if ( !matrix[i] )
				{ 
					matrix[i] = []; 
				}
				var m = matrix[i];
				// Find first available column in the first row
				while ( m[++firstAvailCol] ) {}
				c.realIndex = firstAvailCol;
				for ( var k = i; k < i + rowSpan; k++ )
				{
					if ( !matrix[k] )
					{ 
						matrix[k] = []; 
					}
					var matrixrow = matrix[k];
					for ( var l = firstAvailCol; l < firstAvailCol + colSpan; l++ )
					{
						matrixrow[l] = 1;
					}
				}
			}
		}
	};

	/**
	 * Sets the rowIndex of each row in the table. 
	 * Opera seems to get that wrong using document order instead of logical order on the tfoot-tbody part.
	 * @param {element} table	The table element.
	 */
	var fixRowIndexes = function(tbl) 
	{
		var v = 0, i, k, r = ( tbl.tHead ) ? tbl.tHead.rows : 0;
		if ( r )
		{
			for ( i = 0; i < r.length; i++ )
			{
				r[i].realRIndex = v++;
			}
		}
		for ( k = 0; k < tbl.tBodies.length; k++ )
		{
			r = tbl.tBodies[k].rows;
			if ( r )
			{
				for ( i = 0; i < r.length; i++ )
				{
					r[i].realRIndex = v++;
				}
			}
		}
		r = ( tbl.tFoot ) ? tbl.tFoot.rows : 0;
		if ( r )
		{
			for ( i = 0; i < r.length; i++ )
			{
				r[i].realRIndex = v++;
			}
		}
	};

	/**
	 * Highlights table rows and/or columns on mouse over.
	 * Fixes the highlight of the currently highlighted rows/columns on click.
	 * Works on tables with rowspans and colspans.
	 *
	 * @param {map} options			An object for optional settings (options described below).
	 *
	 * @option {boolean} allowHead		Allow highlighting when hovering over the table header.
	 *							Default value: true
	 * @option {boolean} allowBody		Allow highlighting when hovering over the table body.
	 *							Default value: true
	 * @option {boolean} allowFoot		Allow highlighting when hovering over the table footer.
	 *							Default value: true
	 *
	 * @option {boolean} headRows		If true the rows in the table header will be highlighted when hovering over them.
	 *							Default value: false
	 * @option {boolean} bodyRows		If true the rows in the table body will be highlighted when hovering over them.
	 *							Default value: true
	 * @option {boolean} footRows		If true the rows in the table footer will be highlighted when hovering over them.
	 *							Default value: false
	 * @option {boolean} spanRows		When hovering over a cell spanning over more than one row, highlight all spanned rows.
	 *							Default value: true
	 *
	 * @option {boolean} headCols		If true the cells in the table header (matching the currently hovered column) will be highlighted.
	 *							Default value: false
	 * @option {boolean} bodyCols		If true the cells in the table body (matching the currently hovered column) will be highlighted.
	 *							Default value: true
	 * @option {boolean} footCols		If true the cells in the table footer (matching the currently hovered column) will be highlighted.
	 *							Default value: false
	 * @option {boolean} spanCols		When hovering over a cell spanning over more than one column, highlight all spanned columns.
	 *							Default value: true
	 * @option {array} ignoreCols		An array of numbers. Each column with the matching column index won't be included in the highlighting process.
	 *							Index starting at 1!
	 *							Default value: [] (empty array)
	 *
	 * @option {boolean} headCells		Set a special highlight class to the cell the mouse pointer is currently pointing at (inside the table header only).
	 *							Default value: false
	 * @option {boolean} bodyCells		Set a special highlight class to the cell the mouse pointer is currently pointing at (inside the table body only).
	 *							Default value: true
	 * @option {boolean} footCells		Set a special highlight class to the cell the mouse pointer is currently pointing at (inside the table footer only).
	 *							Default value: false
	 *
	 * @option {string} rowClass			The css class set to the currently highlighted row.
	 *							Default value: 'hover'
	 * @option {string} colClass			The css class set to the currently highlighted column.
	 *							Default value: '' (empty string)
	 * @option {string} cellClass			The css class set to the currently highlighted cell.
	 *							Default value: '' (empty string)
	 * @option {string} clickClass		The css class set to the currently highlighted row and column on mouse click.
	 *							Default value: '' (empty string)
	 *
	 * @example $('#table').tableHover({});
	 * @desc Add simple row highlighting to #table with default settings.
	 *
	 * @example $('#table').tableHover({rowClass: "someclass", colClass: "someotherclass"});
	 * @desc Add row and columnhighlighting to #table and set the specified css classes to the highlighted cells.
	 *
	 * @example $('#table').tableHover({clickClass: "someclickclass"});
	 * @desc Add simple row highlighting to #table and set the specified css class on the cells when clicked.
	 *
	 * @example $('#table').tableHover({allowBody: false, allowFoot: false, allowHead: true, colClass: "someclass"});
	 * @desc Add column highlighting on #table only highlighting the cells when hovering over the table header.
	 *
	 * @example $('#table').tableHover({bodyCols: false, footCols: false, headCols: true, colClass: "someclass"});
	 * @desc Add column highlighting on #table only for the cells in the header.
	 *
	 * @type jQuery
	 *
	 * @name tableHover
	 * @cat Plugins/tableHover
	 * @author Roman Weich (http://p.sohei.org)
	 */
	$.fn.tableHover = function(options)
	{
		var settings = $.extend({
				allowHead : true,
				allowBody : true,
				allowFoot : true,

				headRows : false,
				bodyRows : true,
				footRows : false,
				spanRows : true,

				headCols : false,
				bodyCols : true,
				footCols : false,
				spanCols : true,
				ignoreCols : [],

				headCells : false,
				bodyCells : true,
				footCells : false,
				//css classes,,
				rowClass : 'hover',
				colClass : '',
				cellClass : '',
				clickClass : ''
			}, options);

		return this.each(function() 
        {
			var colIndex = [], rowIndex = [], tbl = this, r, rCnt = 0, lastClick = [-1, -1];

			if ( !tbl.tBodies || !tbl.tBodies.length )
			{
				return;
			}

			/**
			 * Adds all rows and each of their cells to the row and column indexes.
			 * @param {array} rows		An array of table row elements to add.
			 * @param {string} nodeName	Defines whether the rows are in the header, body or footer of the table.
			 */
			var addToIndex = function(rows, nodeName)
			{
				var c, row, rowI, cI, rI, s;
				//loop through the rows
				for ( rowI = 0; rowI < rows.length; rowI++, rCnt++ )
				{
					row = rows[rowI];
					//each cell
					for ( cI = 0; cI < row.cells.length; cI++ )
					{
						c = row.cells[cI];
						//add to rowindex
						if ( (nodeName == 'TBODY' && settings.bodyRows) 
							|| (nodeName == 'TFOOT' && settings.footRows) 
							|| (nodeName == 'THEAD' && settings.headRows) )
						{
							s = c.rowSpan;
							while ( --s >= 0 )
							{
								rowIndex[rCnt + s].push(c);
							}
						}
						//add do colindex
						if ( (nodeName == 'TBODY' && settings.bodyCols)
								|| (nodeName == 'THEAD' && settings.headCols) 
								|| (nodeName == 'TFOOT' && settings.footCols) )
						{
							s = c.colSpan;
							while ( --s >= 0 )
							{
								rI = c.realIndex + s;
								if ( $.inArray(rI + 1, settings.ignoreCols) > -1 )
								{
									break;//dont highlight the columns in the ignoreCols array
								}
								if ( !colIndex[rI] )
								{
									colIndex[rI] = [];
								}
								colIndex[rI].push(c);
							}
						}
						//allow hover for the cell?
						if ( (nodeName == 'TBODY' && settings.allowBody) 
								|| (nodeName == 'THEAD' && settings.allowHead) 
								|| (nodeName == 'TFOOT' && settings.allowFoot) )
						{
							c.thover = true;
						}
					}
				}
			};

			/**
			 * Mouseover event handling. Set the highlight to the rows/cells.
			 */
			var over = function(e)
			{
				var p = e.target;
				while ( p != this && p.thover !== true )
				{
					p = p.parentNode;
				}
				if ( p.thover === true )
				{
					highlight(p, true);
				}
			};

			/**
			 * Mouseout event handling. Remove the highlight from the rows/cells.
			 */
			var out = function(e)
			{
				var p = e.target;
				while ( p != this && p.thover !== true )
				{
					p = p.parentNode;
				}
				if ( p.thover === true )
				{
					highlight(p, false);
				}
			};
			
			/**
			 * Mousedown event handling. Sets or removes the clickClass css style to the currently highlighted rows/cells.
			 */
			var click = function(e)
			{
				var t = e.target;
				while ( t && t != tbl && !t.thover ) //search the real target
					t = t.parentNode;
				if ( t.thover && settings.clickClass != '' )
				{
					var x = t.realIndex, y = t.parentNode.realRIndex, s = '';
					//unclick
					$('td.' + settings.clickClass + ', th.' + settings.clickClass, tbl).removeClass(settings.clickClass);
					if ( x != lastClick[0] || y != lastClick[1] )
					{
						//click..
						if ( settings.rowClass != '' )
						{
							s += ',.' + settings.rowClass;
						}
						if ( settings.colClass != '' )
						{
							s += ',.' + settings.colClass;
						}
						if ( settings.cellClass != '' )
						{
							s += ',.' + settings.cellClass;
						}
						if ( s != '' )
						{
							$('td, th', tbl).filter(s.substring(1)).addClass(settings.clickClass);
						}
						lastClick = [x, y];
					}
					else
					{
						lastClick = [-1, -1];
					}
				}
			};
			
			/**
			 * Adds or removes the highlight to/from the columns and rows.
			 * @param {element} cell	The cell with the mouseover/mouseout event.
			 * @param {boolean} on		Defines whether the style will be set or removed.
			 */
			var highlight = function(cell, on)
			{
				if ( on ) //create dummy funcs - dont want to test for on==true all the time
				{
					$.fn.tableHoverHover = $.fn.addClass;
				}
				else
				{
					$.fn.tableHoverHover = $.fn.removeClass;
				}
				//highlight columns
				var h = colIndex[cell.realIndex] || [], rH = [], i = 0, rI, nn;
				if ( settings.colClass != '' )
				{
					while ( settings.spanCols && ++i < cell.colSpan && colIndex[cell.realIndex + i] )
					{
						h = h.concat(colIndex[cell.realIndex + i]);
					}
					$(h).tableHoverHover(settings.colClass);
				}
				//highlight rows
				if ( settings.rowClass != '' )
				{
					rI = cell.parentNode.realRIndex;
					if ( rowIndex[rI] )
					{
						rH = rH.concat(rowIndex[rI]);
					}
					i = 0;
					while ( settings.spanRows && ++i < cell.rowSpan )
					{
						if ( rowIndex[rI + i] )
						{
							rH = rH.concat(rowIndex[rI + i]);
						}
					}
					$(rH).tableHoverHover(settings.rowClass);
				}
				//highlight cell
				if ( settings.cellClass != '' )
				{
					nn = cell.parentNode.parentNode.nodeName.toUpperCase();
					if ( (nn == 'TBODY' && settings.bodyCells)
							|| (nn == 'THEAD' && settings.headCells)
							|| (nn == 'TFOOT' && settings.footCells) )
					{
						$(cell).tableHoverHover(settings.cellClass);
					}
				}
			};

			fixCellIndexes(tbl);
			fixRowIndexes(tbl);

			//init rowIndex
			for ( r = 0; r < tbl.rows.length; r++ )
			{
				rowIndex[r] = [];
			}
			//add header cells to index
			if ( tbl.tHead )
			{
				addToIndex(tbl.tHead.rows, 'THEAD');
			}
			//create index - loop through the bodies
			for ( r = 0; r < tbl.tBodies.length; r++ )
			{
				addToIndex(tbl.tBodies[r].rows, 'TBODY');
			}
			//add footer cells to index
			if ( tbl.tFoot )
			{
				addToIndex(tbl.tFoot.rows, 'TFOOT');
			}
			$(this).bind('mouseover', over).bind('mouseout', out).click(click);
		});
	};
})(jQuery);


/*----------------------------------------------------------------------------\
|                            Sortable Table 1.12                              |
|-----------------------------------------------------------------------------|
|                         Created by Erik Arvidsson                           |
|                  (http://webfx.eae.net/contact.html#erik)                   |
|                      For WebFX (http://webfx.eae.net/)                      |
|-----------------------------------------------------------------------------|
| A DOM 1 based script that allows an ordinary HTML table to be sortable.     |
|-----------------------------------------------------------------------------|
|                  Copyright (c) 1998 - 2006 Erik Arvidsson                   |
|-----------------------------------------------------------------------------|
| Licensed under the Apache License, Version 2.0 (the "License"); you may not |
| use this file except in compliance with the License.  You may obtain a copy |
| of the License at http://www.apache.org/licenses/LICENSE-2.0                |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| Unless  required  by  applicable law or  agreed  to  in  writing,  software |
| distributed under the License is distributed on an  "AS IS" BASIS,  WITHOUT |
| WARRANTIES OR  CONDITIONS OF ANY KIND,  either express or implied.  See the |
| License  for the  specific language  governing permissions  and limitations |
| under the License.                                                          |
|-----------------------------------------------------------------------------|
| 2003-01-10 | First version                                                  |
| 2003-01-19 | Minor changes to the date parsing                              |
| 2003-01-28 | JScript 5.0 fixes (no support for 'in' operator)               |
| 2003-02-01 | Sloppy typo like error fixed in getInnerText                   |
| 2003-07-04 | Added workaround for IE cellIndex bug.                         |
| 2003-11-09 | The bDescending argument to sort was not correctly working     |
|            | Using onclick DOM0 event if no support for addEventListener    |
|            | or attachEvent                                                 |
| 2004-01-13 | Adding addSortType and removeSortType which makes it a lot     |
|            | easier to add new, custom sort types.                          |
| 2004-01-27 | Switch to use descending = false as the default sort order.    |
|            | Change defaultDescending to suit your needs.                   |
| 2004-03-14 | Improved sort type None look and feel a bit                    |
| 2004-08-26 | Made the handling of tBody and tHead more flexible. Now you    |
|            | can use another tHead or no tHead, and you can chose some      |
|            | other tBody.                                                   |
| 2006-04-25 | Changed license to Apache Software License 2.0                 |  
|-----------------------------------------------------------------------------|
| Created 2003-01-10 | All changes are in the log above. | Updated 2006-04-25 |
\----------------------------------------------------------------------------*/


function SortableTable(oTable, oSortTypes) {

    this.sortTypes = oSortTypes || [];

    this.sortColumn = null;
    this.descending = null;

    var oThis = this;
    this._headerOnclick = function (e) {
        oThis.headerOnclick(e);
    };

    if (oTable) {
        this.setTable( oTable );
        this.document = oTable.ownerDocument || oTable.document;
    }
    else {
        this.document = document;
    }


    // only IE needs this
    var win = this.document.defaultView || this.document.parentWindow;
    this._onunload = function () {
        oThis.destroy();
    };
    if (win && typeof win.attachEvent != "undefined") {
        win.attachEvent("onunload", this._onunload);
    }
}

SortableTable.gecko = navigator.product == "Gecko";
SortableTable.msie = /msie/i.test(navigator.userAgent);
// Mozilla is faster when doing the DOM manipulations on
// an orphaned element. MSIE is not
SortableTable.removeBeforeSort = SortableTable.gecko;

SortableTable.prototype.onsort = function () {};

// default sort order. true -> descending, false -> ascending
SortableTable.prototype.defaultDescending = false;

// shared between all instances. This is intentional to allow external files
// to modify the prototype
SortableTable.prototype._sortTypeInfo = {};

SortableTable.prototype.setTable = function (oTable) {
    if ( this.tHead )
        this.uninitHeader();
    this.element = oTable;
    this.setTHead( oTable.tHead );
    this.setTBody( oTable.tBodies[0] );
};

SortableTable.prototype.setTHead = function (oTHead) {
    if (this.tHead && this.tHead != oTHead )
        this.uninitHeader();
    this.tHead = oTHead;
    this.initHeader( this.sortTypes );
};

SortableTable.prototype.setTBody = function (oTBody) {
    this.tBody = oTBody;
};

SortableTable.prototype.setSortTypes = function ( oSortTypes ) {
    if ( this.tHead )
        this.uninitHeader();
    this.sortTypes = oSortTypes || [];
    if ( this.tHead )
        this.initHeader( this.sortTypes );
};

// adds arrow containers and events
// also binds sort type to the header cells so that reordering columns does
// not break the sort types
SortableTable.prototype.initHeader = function (oSortTypes) {
    if (!this.tHead) return;
    var cells = this.tHead.rows[0].cells;
    var doc = this.tHead.ownerDocument || this.tHead.document;
    this.sortTypes = oSortTypes || [];
    var l = cells.length;
    var img, c;
    for (var i = 0; i < l; i++) {
        c = cells[i];
        if (this.sortTypes[i] != null && this.sortTypes[i] != "None") {
            img = doc.createElement("IMG");
            img.src = "blank.png";
            //c.appendChild(img);
            if (this.sortTypes[i] != null)
                c._sortType = this.sortTypes[i];
            if (typeof c.addEventListener != "undefined")
                c.addEventListener("click", this._headerOnclick, false);
            else if (typeof c.attachEvent != "undefined")
                c.attachEvent("onclick", this._headerOnclick);
            else
                c.onclick = this._headerOnclick;
        }
        else
        {
            c.setAttribute( "_sortType", oSortTypes[i] );
            c._sortType = "None";
        }
    }
    this.updateHeaderArrows();
};

// remove arrows and events
SortableTable.prototype.uninitHeader = function () {
    if (!this.tHead) return;
    var cells = this.tHead.rows[0].cells;
    var l = cells.length;
    var c;
    for (var i = 0; i < l; i++) {
        c = cells[i];
        if (c._sortType != null && c._sortType != "None") {
            c.removeChild(c.lastChild);
            if (typeof c.removeEventListener != "undefined")
                c.removeEventListener("click", this._headerOnclick, false);
            else if (typeof c.detachEvent != "undefined")
                c.detachEvent("onclick", this._headerOnclick);
            c._sortType = null;
            c.removeAttribute( "_sortType" );
        }
    }
};

SortableTable.prototype.updateHeaderArrows = function () {
  /*
  if (!this.tHead) return;
    var cells = this.tHead.rows[0].cells;
    var l = cells.length;
    var img;

    for (var i = 0; i < l; i++) {
        if (cells[i]._sortType != null && cells[i]._sortType != "None") {
            img = cells[i].lastChild;
            if (i == this.sortColumn)
                img.className = "sort-arrow " + (this.descending ? "descending" : "ascending");
            else
                img.className = "sort-arrow";
        }
    }*/
};

SortableTable.prototype.headerOnclick = function (e) {
    // find TD element
    var el = e.target || e.srcElement;
    while (el.tagName != "TD")
        el = el.parentNode;

    this.sort(SortableTable.msie ? SortableTable.getCellIndex(el) : el.cellIndex);
};

// IE returns wrong cellIndex when columns are hidden
SortableTable.getCellIndex = function (oTd) {
    var cells = oTd.parentNode.childNodes
    var l = cells.length;
    var i;
    for (i = 0; cells[i] != oTd && i < l; i++)
        ;
    return i;
};

SortableTable.prototype.getSortType = function (nColumn) {
    return this.sortTypes[nColumn] || "String";
};

// only nColumn is required
// if bDescending is left out the old value is taken into account
// if sSortType is left out the sort type is found from the sortTypes array

SortableTable.prototype.sort = function (nColumn, bDescending, sSortType) {
    if (!this.tBody) return;
    if (sSortType == null)
        sSortType = this.getSortType(nColumn);

    // exit if None
    if (sSortType == "None")
        return;

    if (bDescending == null) {
        if (this.sortColumn != nColumn)
            this.descending = this.defaultDescending;
        else
            this.descending = !this.descending;
    }
    else
        this.descending = bDescending;

    this.sortColumn = nColumn;

    if (typeof this.onbeforesort == "function")
        this.onbeforesort();

    var f = this.getSortFunction(sSortType, nColumn);
    var a = this.getCache(sSortType, nColumn);
    var tBody = this.tBody;

    a.sort(f);

    if (this.descending)
        a.reverse();

    if (SortableTable.removeBeforeSort) {
        // remove from doc
        var nextSibling = tBody.nextSibling;
        var p = tBody.parentNode;
        p.removeChild(tBody);
    }

    // insert in the new order
    var l = a.length;
    for (var i = 0; i < l; i++)
        tBody.appendChild(a[i].element);

    if (SortableTable.removeBeforeSort) {
        // insert into doc
        p.insertBefore(tBody, nextSibling);
    }

    this.updateHeaderArrows();

    this.destroyCache(a);

    if (typeof this.onsort == "function")
        this.onsort();
};

SortableTable.prototype.asyncSort = function (nColumn, bDescending, sSortType) {
    var oThis = this;
    this._asyncsort = function () {
        oThis.sort(nColumn, bDescending, sSortType);
    };
    window.setTimeout(this._asyncsort, 1);
};

SortableTable.prototype.getCache = function (sType, nColumn) {
    if (!this.tBody) return [];
    var rows = this.tBody.rows;
    var l = rows.length;
    var a = new Array(l);
    var r;
    for (var i = 0; i < l; i++) {
        r = rows[i];
        a[i] = {
            value:        this.getRowValue(r, sType, nColumn),
            element:    r
        };
    };
    return a;
};

SortableTable.prototype.destroyCache = function (oArray) {
    var l = oArray.length;
    for (var i = 0; i < l; i++) {
        oArray[i].value = null;
        oArray[i].element = null;
        oArray[i] = null;
    }
};

SortableTable.prototype.getRowValue = function (oRow, sType, nColumn) {
    // if we have defined a custom getRowValue use that
    if (this._sortTypeInfo[sType] && this._sortTypeInfo[sType].getRowValue)
        return this._sortTypeInfo[sType].getRowValue(oRow, nColumn);

    var s;
    var c = oRow.cells[nColumn];
    if (typeof c.innerText != "undefined")
        s = c.innerText;
    else
        s = SortableTable.getInnerText(c);
    return this.getValueFromString(s, sType);
};

SortableTable.getInnerText = function (oNode) {
    var s = "";
    var cs = oNode.childNodes;
    var l = cs.length;
    for (var i = 0; i < l; i++) {
        switch (cs[i].nodeType) {
            case 1: //ELEMENT_NODE
                s += SortableTable.getInnerText(cs[i]);
                break;
            case 3:    //TEXT_NODE
                s += cs[i].nodeValue;
                break;
        }
    }
    return s;
};

SortableTable.prototype.getValueFromString = function (sText, sType) {
    if (this._sortTypeInfo[sType])
        return this._sortTypeInfo[sType].getValueFromString( sText );
    return sText;
    /*
    switch (sType) {
        case "Number":
            return Number(sText);
        case "CaseInsensitiveString":
            return sText.toUpperCase();
        case "Date":
            var parts = sText.split("-");
            var d = new Date(0);
            d.setFullYear(parts[0]);
            d.setDate(parts[2]);
            d.setMonth(parts[1] - 1);
            return d.valueOf();
    }
    return sText;
    */
    };

SortableTable.prototype.getSortFunction = function (sType, nColumn) {
    if (this._sortTypeInfo[sType])
        return this._sortTypeInfo[sType].compare;
    return SortableTable.basicCompare;
};

SortableTable.prototype.destroy = function () {
    this.uninitHeader();
    var win = this.document.parentWindow;
    if (win && typeof win.detachEvent != "undefined") {    // only IE needs this
        win.detachEvent("onunload", this._onunload);
    }
    this._onunload = null;
    this.element = null;
    this.tHead = null;
    this.tBody = null;
    this.document = null;
    this._headerOnclick = null;
    this.sortTypes = null;
    this._asyncsort = null;
    this.onsort = null;
};

// Adds a sort type to all instance of SortableTable
// sType : String - the identifier of the sort type
// fGetValueFromString : function ( s : string ) : T - A function that takes a
//    string and casts it to a desired format. If left out the string is just
//    returned
// fCompareFunction : function ( n1 : T, n2 : T ) : Number - A normal JS sort
//    compare function. Takes two values and compares them. If left out less than,
//    <, compare is used
// fGetRowValue : function( oRow : HTMLTRElement, nColumn : int ) : T - A function
//    that takes the row and the column index and returns the value used to compare.
//    If left out then the innerText is first taken for the cell and then the
//    fGetValueFromString is used to convert that string the desired value and type

SortableTable.prototype.addSortType = function (sType, fGetValueFromString, fCompareFunction, fGetRowValue) {
    this._sortTypeInfo[sType] = {
        type:                sType,
        getValueFromString:    fGetValueFromString || SortableTable.idFunction,
        compare:            fCompareFunction || SortableTable.basicCompare,
        getRowValue:        fGetRowValue
    };
};

// this removes the sort type from all instances of SortableTable
SortableTable.prototype.removeSortType = function (sType) {
    delete this._sortTypeInfo[sType];
};

SortableTable.basicCompare = function compare(n1, n2) {
    if (n1.value < n2.value)
        return -1;
    if (n2.value < n1.value)
        return 1;
    return 0;
};

SortableTable.idFunction = function (x) {
    return x;
};

SortableTable.toUpperCase = function (s) {
    return s.toUpperCase();
};

SortableTable.toDate = function (s) {
    var parts = s.split("-");
    var d = new Date(0);
    d.setFullYear(parts[0]);
    d.setDate(parts[2]);
    d.setMonth(parts[1] - 1);
    return d.valueOf();
};


// add sort types
SortableTable.prototype.addSortType("Number", Number);
SortableTable.prototype.addSortType("CaseInsensitiveString", SortableTable.toUpperCase);
SortableTable.prototype.addSortType("Date", SortableTable.toDate);
SortableTable.prototype.addSortType("String");
// None is a special case



