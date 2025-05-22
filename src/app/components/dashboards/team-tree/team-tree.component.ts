import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MemberTeamCardComponent } from '../../../shared/components/basic/member-team-card/member-team-card.component';
import { FormsModule } from '@angular/forms';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { Node, Edge } from '@swimlane/ngx-graph';
import * as uuid from 'uuid';
import { CommonModule } from '@angular/common';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-team-tree',
  standalone: true,
  imports: [
    MemberTeamCardComponent,
    FormsModule,
    CommonModule,
    // NgxGraphModule,
    OrganizationChartModule
  ],
  templateUrl: './team-tree.component.html',
  styleUrl: './team-tree.component.scss'
})
export class TeamTreeComponent {
selectedNodes!: TreeNode[];

    data: TreeNode[] = [
  {
    expanded: true,
    type: 'person',
    data: {
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      name: 'Amy Elsner',
      team: 'DigiKala',
      role: 'CEO',
    },
    children: [
      {
        expanded: true,
        type: 'person',
        data: {
          image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
          name: 'Anna Fali',
          team: 'Marketing',
          role: 'CMO',
        },
        children: [
          {
            expanded: true,
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
              name: 'Jack Smith',
              team: 'Social Media',
              role: 'Manager',
            },
            children: [
              {
                type: 'person',
                data: {
                  image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                  name: 'Sasha Grey',
                  team: 'Content',
                  role: 'Writer',
                },
              },
              {
                type: 'person',
                data: {
                  image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                  name: 'Mia Tan',
                  team: 'Content',
                  role: 'Editor',
                },
              },
            ],
          },
          {
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
              name: 'Laura Chen',
              team: 'SEO',
              role: 'Specialist',
            },
          },
        ],
      },
      {
        expanded: true,
        type: 'person',
        data: {
          image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
          name: 'Stephen Shaw',
          team: 'Tech',
          role: 'CTO',
        },
        children: [
          {
            expanded: true,
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
              name: 'Ali Rezaei',
              team: 'Backend',
              role: 'Lead Developer',
            },
            children: [
              {
                type: 'person',
                data: {
                  image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                  name: 'Sara Jafari',
                  team: 'API',
                  role: 'Developer',
                },
              },
            ],
          },
          {
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
              name: 'Morteza Akbari',
              team: 'Frontend',
              role: 'UI Engineer',
            },
          },
        ],
      },
      {
        expanded: true,
        type: 'person',
        data: {
          image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
          name: 'Lina Asadi',
          team: 'Operations',
          role: 'COO',
        },
        children: [
          {
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
              name: 'Hamid R.',
              team: 'Logistics',
              role: 'Coordinator',
            },
          },
          {
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
              name: 'Neda Amini',
              team: 'Support',
              role: 'Manager',
            },
          },
          {
            expanded: true,
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
              name: 'Kamran T.',
              team: 'Legal',
              role: 'Lead',
            },
            children: [
              {
                type: 'person',
                data: {
                  image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                  name: 'Zahra Shiri',
                  team: 'Contracts',
                  role: 'Lawyer',
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

// @ViewChild('graph') graph: any;
// animationStates: { [id: string]: 'in' | 'out' } = {};

//   layoutSettings = {
//     orientation: 'TB'
//   };

//   nodes: Node[] = [];
//   links: Edge[] = [];
//   layout: string = 'dagre';
//   expandedNodeIds = new Set<string>();

//   ngOnInit() {
//     const treeData = {
//       id: '1',
//       label: 'مدیر',
//       data: {
//         name: 'مدیر عامل',
//         email: 'boss@example.com',
//         img: './assets/images/faces/11.jpg',animationClass: 'animate-in'
//       },
//       children: [
//         {
//           id: '2',
//           label: 'تیم فنی',
//           data: { name: 'تیم فنی', email: 'tech@example.com', img: './assets/images/faces/2.jpg' },
//           children: [
//             { id: '3', label: 'مینا', data: { name: 'مینا', email: 'mina@example.com', img: './assets/images/faces/3.jpg',animationClass: 'animate-in' } },
//             { id: '4', label: 'فرزاد', data: { name: 'فرزاد', email: 'farzad@example.com', img: './assets/images/faces/4.jpg',animationClass: 'animate-in' } },
//           ],
//         },
//         {
//           id: '5',
//           label: 'تیم فروش',
//           data: { name: 'تیم فروش', email: 'sales@example.com', img: './assets/images/faces/5.jpg',animationClass: 'animate-in' },
//           children: [
//             { id: '6', label: 'آرش', data: { name: 'آرش', email: 'arash@example.com', img: './assets/images/faces/6.jpg',animationClass: 'animate-in' } },
//           ],
//         },
//       ],
//     };
//     this.buildGraph(treeData);
//   }

//   ngAfterViewInit(): void {
//     setTimeout(() => {
//       this.graph.zoomToFit();
//     }, 300);
//   }
//   treeMap: { [id: string]: any } = {};

  // buildGraph(data: any, parent: string | null = null) {
  //   console.log(data)
  //   this.treeMap[data.id] = data;
  //   this.nodes.push({ id: data.id, label: data.label, data: {
  //       src: 'https://img.freepik.com/...jpg',
  //       name: 'abbas mossavi',
  //       email: 'info@info.com'
  //     },
  //    });
  //   if (parent) {
  //     this.links.push({ id: uuid.v4().replace(/[^a-zA-Z0-9-_-]/g, ''), source: parent, target: data.id });
  //   }
  //   if (data.children) {
  //     this.expandedNodeIds.add(data.id);
  //     for (let child of data.children) {
  //       this.buildGraph(child, data.id);
  //     }
  //   }
  // }

  // onNodeClick(event: any) {
  //   const nodeId = event.id;
  //   const originalNode = this.treeMap[nodeId];
  //   if (!originalNode?.children) return;
  //   console.log(originalNode)
  //   // if (!rawNode?.data?.children) return;
    
  //   const isExpanded = this.expandedNodeIds.has(nodeId);
    
  //   if (isExpanded) {
  //     console.log(isExpanded)
  //     this.expandedNodeIds.delete(nodeId);
  //     for (let child of originalNode?.children) {
  //       this.animationStates[child.id] = 'out';
  //     }
  //     setTimeout(() => {
  //       this.nodes = this.nodes.filter(n =>
  //         n.id === nodeId || !originalNode?.children.find((c: any) => c.id === n.id)
  //       );
  //       this.links = this.links.filter(l =>
  //         l.source !== nodeId || !originalNode?.children.find((c: any) => c.id === l.target)
  //       );
  //     }, 300); // همزمان با انیمیشن
  //   } else {
  //     this.expandedNodeIds.add(nodeId);
  //     for (let child of originalNode?.children) {
  //       this.nodes.push({ id: child.id, label: child.label, data: child.data });
  //       this.links.push({ id: uuid.v4().replace(/[^a-zA-Z0-9-_-]/g, ''), source: nodeId, target: child.id });
  //       this.animationStates[child.id] = 'in';
  //     }
  //   }
  // }

}

