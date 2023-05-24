import random

# 현재 사용자가 있는 좌표를 랜덤으로 생성
# 주유소 좌표를 3곳을 생성합니다.
# 가장 가까운 주유소가 현재 위치로 부터 얼마나 떨어져 있는 지 확인합니다.

# 현재 사용자 좌표 : [3, 2]
# 주유소 좌표 3곳 : [[5, 3], [2, 7], [6, 5]] -> 리스트 형태로 리스트에 들어가기 ?

# (3, 2) 좌표와 가장 가까운 주유소는 (2, 7)이므로,
# (3, 2) - (2, 7) = + (0, 3)

# 다른 주유소들의 거리도 구해보자면
# (3, 2) - (5, 3) = - (2, 1)
# (3, 2) - (6, 5) = - (3, 3)

# 이러한 구조의 문제

def gas_prob():
    gasStation = []
    for i in range(3):
        num = []
        for j in range(2):
            gas_station = random.randrange(0, 10)
            num.append(gas_station)
        gasStation.append(num)
    print("주유소 3곳의 위치: ", gasStation)

    humanStation = []
    for i in range(2):
        human_station = random.randrange(0, 10)
        humanStation.append(human_station)
    print("나의 위치: ", humanStation)

    print()

    distance = []
    for num in gasStation:
        distance.append([ai - bi for ai, bi in zip(num, humanStation)])
    print("주유소와 나의 거리를 각각 계산: ",distance)

    print()

    print("제일 가까운 주유소:",min(distance))
