import random

def calculate_health(cpu, memory, disk):
    return round(100 - (0.5 * cpu + 0.3 * memory + 0.2 * disk), 2)

def get_alert(cpu, memory, disk):
    max_val = max(cpu, memory, disk)
    if max_val > 75:
        return "HIGH"
    elif max_val > 50:
        return "MEDIUM"
    else:
        return "LOW"

def generate_systems():
    systems = []

    for i in range(1, 6):
        cpu = random.randint(10, 95)
        memory = random.randint(10, 95)
        disk = random.randint(10, 95)

        systems.append({
            "id": i,
            "name": f"System-{i}",
            "type": "VM" if i % 2 == 0 else "Container",
            "cpu": cpu,
            "memory": memory,
            "disk": disk,
            "health": calculate_health(cpu, memory, disk),
            "alert": get_alert(cpu, memory, disk)
        })

    return systems