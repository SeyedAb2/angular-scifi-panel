import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { collapseTeamCard } from '../../../shared/animation/animation';
import { MemberTreeCardComponent } from '../../../shared/components/basic/member-tree-card/member-tree-card.component';

@Component({
  selector: 'app-team-tree',
  standalone: true,
  imports: [
    MemberTreeCardComponent,
    FormsModule,
    CommonModule,
    // NgxGraphModule,
    OrganizationChartModule
  ],
  templateUrl: './team-tree.component.html',
  styleUrl: './team-tree.component.scss',
  animations:[collapseTeamCard],
})
export class TeamTreeComponent implements OnInit {
  selectedNodes!: TreeNode[];
  zoom: number = 1;
  offsetX: number = 0;
  offsetY: number = 45;
  modeType:'edit'|'list' = 'edit'
  private pinchStartDistance: number | null = null;
  private baseZoom = 1;
  public isPanning = false;
  private startX = 0;
  private startY = 0;

  @ViewChild('zoomWrapper', { static: false }) zoomWrapper!: ElementRef;
  @ViewChild('zoomContainer', { static: false }) zoomContainer!: ElementRef;
  private lastTouchX = 0;
  private lastTouchY = 0;
  data: TreeNode[] = [
  {
    expanded: true,
    type: 'person',
    data: {
      src: 'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740',
      name: 'Amy Elsner',
      team: 'DigiKala',
      mail: 'CEO',
    },
    children: [
      {
        expanded: true,
        type: 'person',
        data: {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaeI9R0-C5zVvlD8IhUOQ3-4ygvfU-S3ydO_BIsXmZUVcdGMeeKESZmrtX68cRfkhiDc&usqp=CAU',
          name: 'Anna Fali',
          team: 'Marketing',
          mail: 'CMO',
        },
        children: [
          {
            expanded: true,
            type: 'person',
            data: {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegfqpGtTzym_EG644VzGiB5jJJWlmLKHw6Q&s',
              name: 'Jack Smith',
              team: 'Social Media',
              mail: 'Manager',
            },
            children: [
              {
                type: 'person',
                data: {
                  src: 'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740',
                  name: 'Sasha Grey',
                  team: 'Content',
                  mail: 'Writer',
                },
              },
              {
                type: 'person',
                data: {
                  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaeI9R0-C5zVvlD8IhUOQ3-4ygvfU-S3ydO_BIsXmZUVcdGMeeKESZmrtX68cRfkhiDc&usqp=CAU',
                  name: 'Mia Tan',
                  team: 'Content',
                  mail: 'Editor',
                },
              },
            ],
          },
          {
            type: 'person',
            data: {
              src: 'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740',
              name: 'Laura Chen',
              team: 'SEO',
              mail: 'Specialist',
            },
          },
        ],
      },
      {
        expanded: true,
        type: 'person',
        data: {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegfqpGtTzym_EG644VzGiB5jJJWlmLKHw6Q&s',
          name: 'Stephen Shaw',
          team: 'Tech',
          mail: 'CTO',
        },
        children: [
          {
            expanded: true,
            type: 'person',
            data: {
              src: 'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740',
              name: 'Ali Rezaei',
              team: 'Backend',
              mail: 'Lead Developer',
            },
            children: [
              {
                type: 'person',
                data: {
                  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaeI9R0-C5zVvlD8IhUOQ3-4ygvfU-S3ydO_BIsXmZUVcdGMeeKESZmrtX68cRfkhiDc&usqp=CAU',
                  name: 'Sara Jafari',
                  team: 'API',
                  mail: 'Developer',
                },
              },
            ],
          },
          {
            type: 'person',
            data: {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaeI9R0-C5zVvlD8IhUOQ3-4ygvfU-S3ydO_BIsXmZUVcdGMeeKESZmrtX68cRfkhiDc&usqp=CAU',
              name: 'Morteza Akbari',
              team: 'Frontend',
              mail: 'UI Engineer',
            },
          },
        ],
      },
      {
        expanded: true,
        type: 'person',
        data: {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaeI9R0-C5zVvlD8IhUOQ3-4ygvfU-S3ydO_BIsXmZUVcdGMeeKESZmrtX68cRfkhiDc&usqp=CAU',
          name: 'Lina Asadi',
          team: 'Operations',
          mail: 'COO',
        },
        children: [
          {
            type: 'person',
            data: {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegfqpGtTzym_EG644VzGiB5jJJWlmLKHw6Q&s',
              name: 'Hamid R.',
              team: 'Logistics',
              mail: 'Coordinator',
            },
          },
          {
            type: 'person',
            data: {
              src: 'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740',
              name: 'Neda Amini',
              team: 'Support',
              mail: 'Manager',
            },
          },
          {
            expanded: true,
            type: 'person',
            data: {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegfqpGtTzym_EG644VzGiB5jJJWlmLKHw6Q&s',
              name: 'Kamran T.',
              team: 'Legal',
              mail: 'Lead',
            },
            children: [
              {
                type: 'person',
                data: {
                  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaeI9R0-C5zVvlD8IhUOQ3-4ygvfU-S3ydO_BIsXmZUVcdGMeeKESZmrtX68cRfkhiDc&usqp=CAU',
                  name: 'Zahra Shiri',
                  team: 'Contracts',
                  mail: 'Lawyer',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  ];

  toggleNode(node: any) {
    node.expanded = !node.expanded;
  }
  
  mode(){
    if(this.modeType=='edit') {this.modeType='list'}
    else {this.modeType='edit'}
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.resetZoom()
  }

  startPan(event: MouseEvent) {
    this.isPanning = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  onPan(event: MouseEvent) {
    if (!this.isPanning) return;
    this.offsetX += (event.clientX - this.startX) / this.zoom;
    this.offsetY += (event.clientY - this.startY) / this.zoom;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  endPan() {
    this.isPanning = false;
  }

  onZoom(event: WheelEvent) {
    event.preventDefault();

    const zoomFactor = 0.1;
    const direction = event.deltaY < 0 ? 1 : -1;

    const oldZoom = this.zoom;
    this.zoom = Math.min(3, Math.max(0.3, this.zoom + direction * zoomFactor));

    const rect = this.zoomWrapper.nativeElement.getBoundingClientRect();

    const offsetX = (event.clientX - rect.left) / oldZoom;
    const offsetY = (event.clientY - rect.top) / oldZoom;

    this.offsetX -= offsetX * (this.zoom - oldZoom);
    this.offsetY -= offsetY * (this.zoom - oldZoom);
  }

  resetZoom() {
    this.zoom = 0.9;
    this.offsetY = 45;

    setTimeout(() => {
      const container = this.zoomContainer.nativeElement as HTMLElement;
      const content = this.zoomWrapper.nativeElement as HTMLElement;

      const containerWidth = container.offsetWidth;
      const contentWidth = content.scrollWidth;

      this.offsetX = (containerWidth - contentWidth) / 2;
    }, 0);
  }

  onTouchStart(event: TouchEvent) {
    if (event.touches.length === 1) {
      this.isPanning = true;
      this.lastTouchX = event.touches[0].clientX;
      this.lastTouchY = event.touches[0].clientY;
    } else if (event.touches.length === 2) {
      event.preventDefault(); // 🔒 غیرفعال کردن رفتار مرورگر
      this.isPanning = false;
      this.pinchStartDistance = this.getDistance(event.touches[0], event.touches[1]);
      this.baseZoom = this.zoom;
    }
  }

  onTouchMove(event: TouchEvent) {
    if (event.touches.length === 1 && this.isPanning) {
      // حالت Pan با یک انگشت
      const touch = event.touches[0];
      const deltaX = touch.clientX - this.lastTouchX;
      const deltaY = touch.clientY - this.lastTouchY;

      const panSpeed = 0.7; // ← برای سرعت بیشتر می‌تونی کمش کنی
      this.offsetX += deltaX / (this.zoom * panSpeed);
      this.offsetY += deltaY / (this.zoom * panSpeed);

      this.lastTouchX = touch.clientX;
      this.lastTouchY = touch.clientY;

    } else if (event.touches.length === 2 && this.pinchStartDistance) {
      event.preventDefault(); // جلوگیری از اسکرول صفحه

      const touch1 = event.touches[0];
      const touch2 = event.touches[1];

      const newDistance = this.getDistance(touch1, touch2);
      const rawZoom = newDistance / this.pinchStartDistance;
      const zoomFactor = 1 + (rawZoom - 1) * 0.4; // 🔽 کاهش سرعت زوم

      const newZoom = Math.min(3, Math.max(0.3, this.baseZoom * zoomFactor)); // 🔄 newZoom نرم و محدود شده

      // 🔹 مرکز بین دو انگشت (focal point)
      const centerX = (touch1.clientX + touch2.clientX) / 2;
      const centerY = (touch1.clientY + touch2.clientY) / 2;

      const rect = this.zoomWrapper.nativeElement.getBoundingClientRect();

      // 🔸 محاسبه offset به ازای موقعیت مرکز لمس و جبران حرکت
      const offsetX = (centerX - rect.left) / this.zoom;
      const offsetY = (centerY - rect.top) / this.zoom;

      const oldZoom = this.zoom;
      this.zoom = newZoom;

      this.offsetX -= offsetX * (this.zoom - oldZoom); // 🔄 جبران دقیق جابجایی X
      this.offsetY -= offsetY * (this.zoom - oldZoom); // 🔄 جبران دقیق جابجایی Y
    } 
  }


  getDistance(t1: Touch, t2: Touch): number {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  deleteItem(item:any){
    this.data = this.removeNode(item, this.data);
  }
  removeNode(targetNode: TreeNode, nodes: TreeNode[]): TreeNode[] {
    return nodes
      .map(node => {
        if (node === targetNode) return null;

        if (node.children) {
          node.children = this.removeNode(targetNode, node.children);
        }

        return node;
      })
      .filter(n => n !== null) as TreeNode[];
  }
}

