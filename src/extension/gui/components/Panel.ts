/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/// <reference path="../core/IDisplayText.ts"/>

module ns_egret {

	export class Panel extends SkinnableContainer{
		/**
		 * 构造函数
		 */		
		public constructor(){
			super();
			this.touchEnabled = false;
			//当面板覆盖在会运动的场景上时，将会导致不断被触发重绘，而如果含有较多矢量子项，
			//就会消耗非常多的渲染时间。设置位图缓存将能极大提高这种情况下的性能。
			this.cacheAsBitmap = true;
		}
		
		/**
		 * @inheritDoc
		 */
		public get hostComponentKey():any{
			return Panel;
		}
		
		/**
		 * [SkinPart]标题显示对象 
		 */
		public titleDisplay:IDisplayText;

		private _title:string = "";
		/**
		 * 标题内容改变 
		 */		
		private titleChanged:boolean;
		/**
		 * 标题文本内容
		 */		
		public get title():string {
			return this._title;
		}
		
		public set title(value:string) {
			this._title = value;
			
			if (this.titleDisplay)
				this.titleDisplay.text = this.title;
		}
		
		/**
		 * @inheritDoc
		 */
		public partAdded(partName:string, instance:any):void{
			super.partAdded(partName, instance);
			
			if (instance == this.titleDisplay){
				this.titleDisplay.text = this.title;
			}
		}
		
	}
}