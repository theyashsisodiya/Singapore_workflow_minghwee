import React from 'react';
import { ActorType } from '../types';
import { User, Server, Briefcase, FileCheck, ShieldCheck, Users, Globe, Truck, UserCheck, ShieldAlert } from 'lucide-react';

interface ActorBadgeProps {
  actor: ActorType;
  className?: string;
  showLabel?: boolean;
}

const ACTOR_CONFIG: Record<ActorType, { label: string; icon: React.FC<any>; color: string; bg: string }> = {
  EMP: { label: "Employer", icon: User, color: "text-blue-700", bg: "bg-blue-100" },
  SYS: { label: "System", icon: Server, color: "text-slate-700", bg: "bg-slate-100" },
  SP: { label: "Salesperson", icon: Briefcase, color: "text-indigo-700", bg: "bg-indigo-100" },
  AD: { label: "Admin", icon: FileCheck, color: "text-purple-700", bg: "bg-purple-100" },
  DR: { label: "Doc Reviewer", icon: ShieldCheck, color: "text-teal-700", bg: "bg-teal-100" },
  CAN: { label: "Candidate", icon: UserCheck, color: "text-emerald-700", bg: "bg-emerald-100" },
  OA: { label: "Overseas Agent", icon: Globe, color: "text-orange-700", bg: "bg-orange-100" },
  TC: { label: "Transport Co.", icon: Truck, color: "text-amber-700", bg: "bg-amber-100" },
  BM: { label: "Branch Mgr", icon: Users, color: "text-rose-700", bg: "bg-rose-100" },
  SA: { label: "Super Admin", icon: ShieldAlert, color: "text-red-700", bg: "bg-red-100" },
};

export const ActorBadge: React.FC<ActorBadgeProps> = ({ actor, className = "", showLabel = true }) => {
  const config = ACTOR_CONFIG[actor] || ACTOR_CONFIG.SYS;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${config.bg} ${config.color} ${className}`}>
      <Icon className="w-3.5 h-3.5" />
      {showLabel && config.label}
    </span>
  );
};
